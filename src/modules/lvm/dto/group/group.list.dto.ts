import { IDto } from "src/modules/base/base.dto";

export interface GroupListItemDto extends IDto {
    
}

export interface GroupListDto extends IDto {
    groups: GroupListItemDto[]
}