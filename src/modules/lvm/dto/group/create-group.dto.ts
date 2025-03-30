import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty } from 'class-validator';
import { IDto } from 'src/modules/base/base.dto';

export class CreateGroupDto implements IDto {
  @ApiProperty({ description: 'The name of the group' })
  @IsNotEmpty()
  name: string;
  @ApiProperty({ description: 'The array of drive ids' })
  @IsArray()
  @IsNotEmpty()
  drives: string[];
}
