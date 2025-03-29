import { Module } from "@nestjs/common";
import { DriveController } from "./controllers/drive.controller";
import { DriveService } from "./services/drive.service";
import { UtilsModule } from "../utils/utils.module";
import { IModule } from "../base/base.module";

@Module({
    imports: [UtilsModule],
    controllers: [DriveController],
    providers: [DriveService]
})
export class DriveModule implements IModule {}