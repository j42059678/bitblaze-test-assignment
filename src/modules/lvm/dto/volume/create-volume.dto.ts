import { ApiProperty } from '@nestjs/swagger';
import { IDto } from 'src/modules/base/base.dto';

export class CreateVolumeDto implements IDto {
  @ApiProperty({ description: 'The name of the volume' })
  name: string;
  @ApiProperty({ description: 'The id of the group' })
  vg_id: string;
  @ApiProperty({ description: 'The size of the volume in bytes' })
  size: number;
}
