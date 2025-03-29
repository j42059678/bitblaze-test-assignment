import { Module } from '@nestjs/common';
import { ExecutorService } from './service/executor.service';
import { IModule } from '../base/base.module';

@Module({
  providers: [ExecutorService],
  exports: [ExecutorService]
})
export class UtilsModule implements IModule {}