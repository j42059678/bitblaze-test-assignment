import { Module } from '@nestjs/common';
import { ExecutorService } from './service/executor.service';

@Module({
  providers: [ExecutorService],
  exports: [ExecutorService]
})
export class UtilsModule {}