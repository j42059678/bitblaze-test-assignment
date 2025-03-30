import { ApiProperty } from '@nestjs/swagger';
import { isString } from 'class-validator';
import { IDto } from 'src/modules/base/base.dto';

export class CreateGroupDto implements IDto {
  @ApiProperty({ description: 'The name of the group' })
  @isString()
  name: string
  @ApiProperty({ description: 'The array of drive ids' })
  @isString()
  drives: string[]
}
