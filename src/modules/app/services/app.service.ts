import { Injectable } from '@nestjs/common';
import { ExecutorService } from 'src/modules/utils/service/executor.service';


@Injectable()
export class AppService {
  constructor(private readonly  executorService: ExecutorService) {}

  async getHello(): Promise<string> {
    return this.executorService.execute('just-hello.sh');
  }
}
