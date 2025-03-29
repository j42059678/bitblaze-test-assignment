import { IDto } from "src/modules/base/base.dto";

export interface CreateGroupDto extends IDto {
    drives: string[]
}