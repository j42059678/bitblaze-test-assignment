import { IsString, Matches } from 'class-validator';
import { IDto } from 'src/modules/base/base.dto';

export class GetDriveByIdParamDto implements IDto {
  @IsString()
  @Matches(/^\/dev\/(sd[a-z]|md[0-9]+|nvme[0-9]n[0-9]|loop[0-9]+)$/)
  id: string;
}
