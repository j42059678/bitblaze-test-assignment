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
import { VolumeListDto } from '../dto/volume/volume.list.dto';
import { VolumeDto } from '../dto/volume/volume.dto';

@ApiTags('Logical Volume Managment/Volume')
@Controller()
export class LvmVolumeController implements LvmController {
  constructor(private readonly volumeService: LvmVolumeService) {}

  @ApiOperation({ summary: 'Get all volumes' })
  @Get('/api/volume')
  async getVolumes(): Promise<VolumeListDto> {
    return await this.volumeService.getVolumes();
  }

  @ApiOperation({ summary: 'Get volume by id of the group' })
  @Get('/api/volume/:groupId')
  async getVolumesByGroupId(
    @Param('groupId') groupId: string,
  ): Promise<VolumeDto> {
    return await this.volumeService.getVolumesByGroupId(groupId);
  }

  @ApiOperation({ summary: 'Get volume by its id and id of the group' })
  @Get('/api/volume/:groupId/:volumeId')
  async getVolumeByGroupIdAndVolumeId(
    @Param('groupId') groupId: string,
    @Param('volumeId') volumeId: string,
  ): Promise<VolumeDto> {
    return await this.volumeService.getVolumeByVolumeGroupIdAndVolumeId(groupId, volumeId);
  }

  @ApiOperation({ summary: 'Create a volume' })
  @Post('api/volume')
  async createVolume(@Body() dto: CreateVolumeDto): Promise<VolumeDto> {
    return await this.volumeService.createVolume(dto);
  }

  @ApiOperation({ summary: 'Delete a volume from the group by its id and id of the group' })
  @Delete('/api/volume/:groupId/:volumeId')
  async deleteVolumeById(
    @Param('groupId') groupId: string,
    @Param('volumeId') volumeId: string,
  ): Promise<VolumeDto> {
    return await this.volumeService.deleteVolumeByGroupIdAndVolumeId(
      groupId,
      volumeId,
    );
  }
}
