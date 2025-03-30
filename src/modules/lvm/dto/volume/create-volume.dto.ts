import { IDto } from 'src/modules/base/base.dto';

export interface CreateVolumeDto extends IDto {
  name: string;
  vg_id: string;
  size: number;
}
