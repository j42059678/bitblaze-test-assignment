import { Injectable } from '@nestjs/common';
import { LvmService } from './lvm.service';
import { CreateGroupDto } from '../dto/group/create-group.dto';
import { ExecutorService } from 'src/modules/utils/service/executor.service';
import { GroupListDto } from '../dto/group/group.list.dto';
import { GroupDto } from '../dto/group/group.dto';

@Injectable()
export class LvmGroupService implements LvmService {
  constructor(private readonly executorService: ExecutorService) {}

  async getGroups(): Promise<GroupListDto> {
    const data = await this.executorService.execute('get_groups');
    const groups = await JSON.parse(data);
    return groups;
  }

  async getGroupById(groupId: string): Promise<GroupDto> {
    const data = await this.executorService.execute(
      `get_group_by_id \'${groupId}\'`,
    );
    const group = await JSON.parse(data);
    return group;
  }

  async createGroup(dto: CreateGroupDto): Promise<GroupDto> {
    const createdId = await this.executorService.execute(
      `create_group \'${JSON.stringify(dto)}\'`,
    );
    const group = await this.getGroupById(createdId);
    return group;
  }

  async deleteGroupById(groupId: string): Promise<GroupDto> {
    const group = await this.getGroupById(groupId);
    await this.executorService.execute(`delete_group_by_id \'${groupId}\'`);
    return group;
  }
}
