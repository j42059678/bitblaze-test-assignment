import { IDto } from "src/modules/base/base.dto";

export interface VolumeListItemDto extends IDto {

}

export interface VolumeListDto extends IDto {
    volumes: VolumeListItemDto[]
}