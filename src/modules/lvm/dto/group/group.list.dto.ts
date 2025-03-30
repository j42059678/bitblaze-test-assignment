import { IDto } from 'src/modules/base/base.dto';

export interface GroupListItemDto extends IDto {
  id: string;
}

export interface GroupListDto extends IDto {
  groups: GroupListItemDto[];
}
