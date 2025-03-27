import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { TestDto } from '../dto/test.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Default')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test')
  @ApiOperation({ summary: 'Nothing' })
  async test(): Promise<TestDto> {
    const data = await this.appService.test();
    const res = JSON.parse(data);
    return res;
  }
}
