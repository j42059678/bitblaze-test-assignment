import { IDto } from 'src/modules/base/base.dto';

export interface DriveDto extends IDto {
  name: string;
  size: number;
}
