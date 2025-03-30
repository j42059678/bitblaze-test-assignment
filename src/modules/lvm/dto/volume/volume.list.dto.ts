import { IDto } from 'src/modules/base/base.dto';

export interface VolumeListItemDto extends IDto {
  id: string;
  vg: string;
}

export interface VolumeListDto extends IDto {
  volumes: VolumeListItemDto[];
}
