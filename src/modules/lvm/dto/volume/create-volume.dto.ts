import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { IDto } from 'src/modules/base/base.dto';

export class CreateVolumeDto implements IDto {
  @ApiProperty({ description: 'The name of the volume' })
  @IsNotEmpty()
  name: string;
  @ApiProperty({ description: 'The id of the group' })
  @IsNotEmpty()
  vg_id: string;
  @ApiProperty({ description: 'The size of the volume in bytes' })
  @IsNotEmpty()
  @IsNumber()
  size: number;
}
