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
    const data = await this.executorService.execute('get-groups.sh');
    const groups = JSON.parse(data);
    return groups;
  }

  async getGroupById(id: string): Promise<GroupDto> {
    const data = await this.executorService.execute(
      `souce get-group-by-id.sh && get_group_by_id ${id}`,
    );
    const group = JSON.parse(data);
    return group;
  }

  async createGroup(dto: CreateGroupDto): Promise<GroupDto> {
    const data = await this.executorService.execute(
      `source create-group.sh && create_group ${dto}`,
    );
    const group = JSON.parse(data);
    return group;
  }

  async updateGroupById(id: string, dto: UpdateGroupDto): Promise<GroupDto> {
    const data = await this.executorService.execute(
      `source update-group-by-id.sh && update_grou_by_id ${id} ${dto}`,
    );
    const group = JSON.parse(data);
    return group;
  }

  async deleteGroupById(id: string): Promise<GroupDto> {
    const data = await this.executorService.execute(
      `source delete-group-by-id.sh && delete_group_by_id ${id}`,
    );
    const group = JSON.parse(data);
    return group;
  }
}
