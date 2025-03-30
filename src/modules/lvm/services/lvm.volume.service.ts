import { Injectable } from '@nestjs/common';
import { LvmService } from './lvm.service';
import { ExecutorService } from 'src/modules/utils/service/executor.service';
import { CreateVolumeDto } from '../dto/volume/create-volume.dto';
import { UpdateGroupDto } from '../dto/group/update-group.dto';
import { VolumeListDto } from '../dto/volume/volume.list.dto';
import { VolumeDto } from '../dto/volume/volume.dto';

@Injectable()
export class LvmVolumeService implements LvmService {
  constructor(private readonly executorService: ExecutorService) {}

  async getVolumes(): Promise<VolumeListDto> {
    const data = await this.executorService.execute('source get-volumes.sh && get_volumes ');
    const groups = JSON.parse(data);
    return groups;
  }

  async getVolumeById(id: string): Promise<VolumeDto> {
    const data = await this.executorService.execute(
      `source get-volume-by-id.sh && get_volume_by_id ${id}`,
    );
    const groups = JSON.parse(data);
    return groups;
  }

  async createVolume(dto: CreateVolumeDto): Promise<VolumeDto> {
    const data = await this.executorService.execute(`source create-volume.sh && create_volume ${dto}`);
    const volume = JSON.parse(data);
    return volume;
  }

  async updateVolumeById(id: string, dto: UpdateGroupDto): Promise<VolumeDto> {
    const data = await this.executorService.execute(
      `source update-volume-by-id.sh && update_volume '${id} ${JSON.stringify(dto)}'`,
    );
    const volume = JSON.parse(data);
    return volume;
  }

  async deleteVolumeById(id: string): Promise<VolumeDto> {
    const data = await this.executorService.execute(
      `source delete-volume-by-id.sh && delete_volume_by_id ${id}`,
    );
    const volume = JSON.parse(data);
    return volume;
  }
}
