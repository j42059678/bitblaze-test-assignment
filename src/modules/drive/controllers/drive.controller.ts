import { Controller, Delete, Get, Param } from "@nestjs/common";
import { DriveService } from "../services/drive.service";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { IController } from "src/modules/base/base.controller";
import { GetDriveByIdParamDto } from "../dto/get-drive-by-id.params.dto";
import { EjectDriveByIdParamDto } from "../dto/eject-drive-by-id.params.dto";

@ApiTags('Drives')
@Controller()
export class DriveController implements IController {
    constructor(private driveService: DriveService) {}
    
    @Get('api/drive')
    @ApiOperation({ summary: 'Get all drives' })
    async getDrives() {
        return this.driveService.getDrives();
    }

    @Get('api/drive/:id')
    @ApiOperation({ summary: 'Get a drive by id' })
    async getDriveById(@Param() params: GetDriveByIdParamDto) {
        return this.driveService.getDriveById(params.id);
    }

    @Delete('api/drive/:id')
    @ApiOperation({ summary: 'Eject a drive by id' })
    async ejectDriveById(@Param() params: EjectDriveByIdParamDto) {
        return this.driveService.ejectDriveById(params.id);
    }
}