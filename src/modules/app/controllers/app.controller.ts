import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { HelloDto } from '../dto/test.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Misc')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  @ApiOperation({ summary: 'Get a message' })
  async getHello(): Promise<HelloDto> {
    const data = await this.appService.getHello();
    const res = JSON.parse(data);
    return res;
  }
}
