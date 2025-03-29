import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { DriveModule } from '../drive/drive.module';
import { LogicalVolumeManagerModule } from '../lvm/lvm.module';
import { UtilsModule } from '../utils/utils.module';
import { IModule } from '../base/base.module';

@Module({
  imports: [UtilsModule, DriveModule, LogicalVolumeManagerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements IModule {}
