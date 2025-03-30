import { Module } from '@nestjs/common';
import { LvmService } from './services/lvm.service';
import { LvmGroupController } from './controllers/lvm.group.controller';
import { LvmVolumeController } from './controllers/lvm.volume.controller';
import { LvmGroupService } from './services/lvm.group.service';
import { LvmVolumeService } from './services/lvm.volume.service';
import { UtilsModule } from '../utils/utils.module';
import { IModule } from '../base/base.module';

@Module({
  imports: [UtilsModule],
  controllers: [LvmGroupController, LvmVolumeController],
  providers: [LvmGroupService, LvmVolumeService],
})
export class LogicalVolumeManagerModule implements IModule {}
