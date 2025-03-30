import { IDto } from 'src/modules/base/base.dto';

export interface DriveListDtoItem extends IDto {
  name: string;
  size: number;
}

export interface DriveListDto extends IDto {
  drives: DriveListDtoItem[];
}
