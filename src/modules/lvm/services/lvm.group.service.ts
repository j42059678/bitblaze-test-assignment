import { Injectable } from '@nestjs/common';
import { LvmService } from './lvm.service';
import { CreateGroupDto } from '../dto/group/create-group.dto';
import { ExecutorService } from 'src/modules/utils/service/executor.service';
import { UpdateGroupDto } from '../dto/group/update-group.dto';
import { GroupListDto } from '../dto/group/group.list.dto';
import { GroupDto } from '../dto/group/group.dto';

@Injectable()
export class LvmGroupService implements LvmService {
  constructor(private readonly executorService: ExecutorService) {}

  async getGroups(): Promise<GroupListDto> {
    const data = await this.executorService.execute(
      'source get-groups.sh && get_groups',
    );
    const groups = JSON.parse(data);
    return groups;
  }

  async getGroupById(id: string): Promise<GroupDto> {
    const data = await this.executorService.execute(
      `source get-group-by-id.sh && get_group_by_id \'${id}\'`,
    );
    const group = JSON.parse(data);
    return group;
  }

  async createGroup(dto: CreateGroupDto): Promise<GroupDto> {
    const createdId = await this.executorService.execute(
      `source create-group.sh && create_group \'${JSON.stringify(dto)}\'`,
    );
    return this.getGroupById(createdId);
  }

  async updateGroupById(id: string, dto: UpdateGroupDto): Promise<GroupDto> {
    const updatedId = await this.executorService.execute(
      `source update-group-by-id.sh && update_group_by_id \'${id}\' \'${dto}\'`,
    );
    return this.getGroupById(updatedId);
  }

  async deleteGroupById(id: string): Promise<GroupDto> {
    const group = await this.getGroupById(id);
    await this.executorService.execute(
      `source delete-group-by-id.sh && delete_group_by_id \'${id}\'`,
    );
    return group;
  }
}
