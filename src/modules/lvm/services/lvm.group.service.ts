import { Injectable } from "@nestjs/common";
import { LvmService } from "./lvm.service";
import { CreateGroupDto } from "../dto/group/create-group.dto";
import { ExecutorService } from "src/modules/utils/service/executor.service";
import { UpdateGroupDto } from "../dto/group/update-group.dto";

@Injectable()
export class LvmGroupService implements LvmService {

    constructor(private readonly executorService: ExecutorService) {}

    async getGroups() {
        const data = await this.executorService.execute('get-groups.sh');
        const groups = JSON.parse(data);
        return groups;
    }

    async getGroupById(groupId: string) {
        const data = await this.executorService.execute(`get-group-by-id.sh ${groupId}`);
        const group = JSON.parse(data);
        return group;
    }

    async createGroup(dto: CreateGroupDto) {
        
    }

    async updateGroupsById(id: string, dto: UpdateGroupDto) {
        
    }

    async deleteGroupsById(id: string) {
        
    }
}