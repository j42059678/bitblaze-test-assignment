import { IDto } from 'src/modules/base/base.dto';

export interface VolumeDto extends IDto {
  id: string;
  vg: string;
  size: number;
}
