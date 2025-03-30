import { Injectable } from '@nestjs/common';
import { LvmService } from './lvm.service';
import { ExecutorService } from 'src/modules/utils/service/executor.service';
import { CreateVolumeDto } from '../dto/volume/create-volume.dto';
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

  async getVolumesByGroupId(groupId: string): Promise<VolumeDto> {
    const data = await this.executorService.execute(
      `source get-volumes-by-group-id.sh && get_volumes_by_group_id \'${groupId}\'`,
    );
    const volume = JSON.parse(data);
    return volume;
  }

  async getVolumeByVolumeGroupIdAndVolumeId(groupId: string, volumeId: string) {
    const data = await this.executorService.execute(
      `source get-volume-by-group-id-and-volume-id.sh && get_volume_by_group_id_and_volume_id \'${groupId}\' \'${volumeId}\'`,
    );
    const volume = JSON.parse(data);
    return volume;
  }

  async createVolume(dto: CreateVolumeDto): Promise<VolumeDto> {
    const createdId = await this.executorService.execute(
      `source create-volume.sh && create_volume \'${JSON.stringify(dto)}\'`,
    );
    return await this.getVolumeByVolumeGroupIdAndVolumeId(dto.vg_id, createdId);
  }

  async deleteVolumeByGroupIdAndVolumeId(
    groupId: string,
    volumeId: string,
  ): Promise<VolumeDto> {
    const volume = await this.getVolumeByVolumeGroupIdAndVolumeId(
      groupId,
      volumeId,
    );
    await this.executorService.execute(
      `source delete-volume-by-group-id-and-volume-id.sh && delete_volume_by_group_id_and_volume_id \'${groupId}\' \'${volumeId}\'`,
    );
    return volume;
  }
}
