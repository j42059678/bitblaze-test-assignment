import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateVolumeDto } from '../dto/volume/create-volume.dto';
import { LvmController } from './lvm.controller';
import { LvmVolumeService } from '../services/lvm.volume.service';
import { UpdateVolumeDto } from '../dto/volume/update-volume.dto';
import { VolumeListDto } from '../dto/volume/volume.list.dto';
import { VolumeDto } from '../dto/volume/volume.dto';

@ApiTags('Logical Volume Managment/Volume')
@Controller()
export class LvmVolumeController implements LvmController {
  constructor(private readonly volumeService: LvmVolumeService) {}

  @ApiOperation({ summary: 'Get all volumes' })
  @Get('/api/volume')
  async getVolumes(): Promise<VolumeListDto> {
    return this.volumeService.getVolumes();
  }

  @ApiOperation({ summary: 'Get volume by its id' })
  @Get('/api/volume/:id')
  async getVolumeById(@Param('id') id: string): Promise<VolumeDto> {
    return this.volumeService.getVolumeById(id);
  }

  @ApiOperation({ summary: 'Create a volume' })
  @Post('api/volume')
  async createVolume(@Body() dto: CreateVolumeDto): Promise<VolumeDto> {
    return this.volumeService.createVolume(dto);
  }

  @ApiOperation({ summary: 'Update a volume by its id' })
  @Put('/api/volume/:id')
  async updateVolumeById(
    @Param('id') id: string,
    dto: UpdateVolumeDto,
  ): Promise<VolumeDto> {
    return this.volumeService.updateVolumeById(id, dto);
  }

  @ApiOperation({ summary: 'Delete a volume by its id' })
  @Delete('/api/volume/:id')
  async deleteVolumeById(@Param('id') id: string): Promise<VolumeDto> {
    return this.volumeService.deleteVolumeById(id);
  }
}
