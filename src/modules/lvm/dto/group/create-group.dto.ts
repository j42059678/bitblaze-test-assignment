import { ApiProperty } from '@nestjs/swagger';
import { IDto } from 'src/modules/base/base.dto';

export class CreateGroupDto implements IDto {
  @ApiProperty({ description: 'The name of the group' })
  name: string
  @ApiProperty({ description: 'The array of drive ids' })
  drives: string[]
}
