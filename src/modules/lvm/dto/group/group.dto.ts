import { IDto } from 'src/modules/base/base.dto';

export interface GroupDto extends IDto {
  id: string;
  pv: number;
  lv: number;
  size: number;
  free: number;
}
