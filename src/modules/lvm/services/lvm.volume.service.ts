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
    const data = await this.executorService.execute(
      'source get-volumes.sh && get_volumes ',
    );
    const volumes = JSON.parse(data);
    return volumes;
  }

  async getVolumeById(id: string): Promise<VolumeDto> {
    const data = await this.executorService.execute(
      `source get-volume-by-id.sh && get_volume_by_id \'${id}\'`,
    );
    const volume = JSON.parse(data);
    return volume;
  }

  async createVolume(dto: CreateVolumeDto): Promise<VolumeDto> {
    const createdId = await this.executorService.execute(
      `source create-volume.sh && create_volume \'${JSON.stringify(dto)}\'`,
    );
    return this.getVolumeById(createdId);
  }

  async updateVolumeById(id: string, dto: UpdateGroupDto): Promise<VolumeDto> {
    const updatedId = await this.executorService.execute(
      `source update-volume-by-id.sh && update_volume \'${id}\' \'${JSON.stringify(dto)}\'`,
    );
    return this.getVolumeById(updatedId);
  }

  async deleteVolumeById(id: string): Promise<VolumeDto> {
    const volume = await this.getVolumeById(id);
    await this.executorService.execute(
      `source delete-volume-by-id.sh && delete_volume_by_id \'${id}\'`,
    );
    return volume;
  }
}
