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
        const data = await this.executorService.execute(`create-volume.sh ${dto}`);
        const volume = JSON.parse(data);
        return volume;
    }

    async updateVolumeById(id: string, dto: UpdateGroupDto) {
        const data = await this.executorService.execute(`update-volume-by-id.sh ${id} ${dto}`);
        const volume = JSON.parse(data);
        return volume;
    }

    async deleteVolumeById(id: string) {
        const data = await this.executorService.execute(`delete-volume-by-id.sh ${id}`);
        const volume = JSON.parse(data);
        return volume;
    }
}