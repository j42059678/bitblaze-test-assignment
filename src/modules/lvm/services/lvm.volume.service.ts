import { Injectable } from "@nestjs/common";
import { LvmService } from "./lvm.service";
import { ExecutorService } from "src/modules/utils/service/executor.service";
import { CreateVolumeDto } from "../dto/volume/create-volume.dto";
import { UpdateGroupDto } from "../dto/group/update-group.dto";

@Injectable()
export class LvmVolumeService implements LvmService {
    constructor(private readonly executorService: ExecutorService) { }

    async getVolumes() {
        const data = await this.executorService.execute('get-volumes.sh');
        const groups = JSON.parse(data);
        return groups;
    }

    async getVolumeById(id: string) {
        const data = await this.executorService.execute(`get-volume-by-id.sh ${id}`);
        const groups = JSON.parse(data);
        return groups;
    }

    async createVolume(dto: CreateVolumeDto) {

    }

    async updateVolumeById(id: string, dto: UpdateGroupDto) {

    }

    async deleteVolumeById(id: string) {

    }
}