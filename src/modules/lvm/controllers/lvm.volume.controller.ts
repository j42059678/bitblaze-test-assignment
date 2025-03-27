import { Controller, Post, Body, Get, Put, Delete, Param } from "@nestjs/common";
import { ApiTags, ApiOperation } from "@nestjs/swagger";
import { CreateVolumeDto } from "../dto/volume/create-volume.dto";
import { LvmController } from "./lvm.controller";
import { LvmVolumeService } from "../services/lvm.volume.service";
import { UpdateVolumeDto } from "../dto/volume/update-volume.dto";

@ApiTags('Logical Volume Managment/Volume')
@Controller()
export class LvmVolumeController implements LvmController {

    constructor(private readonly volumeService: LvmVolumeService) {}

    @ApiOperation({ summary: 'Get all volumes by group id' })
    @Get('/api/volume')
    async getVolumes() {
        return this.volumeService.getVolumes();
    }

    @ApiOperation({ summary: 'Get a volume by id' })
    @Get('/api/volume/:id')
    async getVolumeById(@Param('id') id: string) {
        return this.volumeService.getVolumeById(id);
    }

    @ApiOperation({ summary: 'Create a volume by group id' })
    @Post('api/volume')
    async createVolume(@Body() dto: CreateVolumeDto) {
        return this.volumeService.createVolume(dto);
    }

    @ApiOperation({ summary: 'Update a volume by id' })
    @Put('/api/volume/:id')
    async updateVolumeById(@Param('id') id: string, dto: UpdateVolumeDto) {
        return this.volumeService.updateVolumeById(id, dto);
    }

    @ApiOperation({ summary: 'Delete a volume by id' })
    @Delete('/api/volume/:id')
    async deleteVolumeById(@Param('id') id: string) {
        return this.volumeService.deleteVolumeById(id);
    }
}