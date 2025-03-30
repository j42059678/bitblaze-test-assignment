import {
  Post,
  Body,
  Get,
  Put,
  Delete,
  Controller,
  Param,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateGroupDto } from '../dto/group/create-group.dto';
import { LvmController } from './lvm.controller';
import { LvmGroupService } from '../services/lvm.group.service';
import { UpdateGroupDto } from '../dto/group/update-group.dto';
import { GroupListDto } from '../dto/group/group.list.dto';
import { GroupDto } from '../dto/group/group.dto';

@ApiTags('Logical Volume Managment/Group')
@Controller()
export class LvmGroupController implements LvmController {
  constructor(private readonly groupService: LvmGroupService) {}

  @ApiOperation({ summary: 'Get all groups' })
  @Get('api/vg')
  async getGroups(): Promise<GroupListDto> {
    return this.groupService.getGroups();
  }

  @ApiOperation({ summary: 'Get a group by id' })
  @Get('api/vg/:id')
  async getGroupById(@Param('id') id: string): Promise<GroupDto> {
    return this.groupService.getGroupById(id);
  }

  @ApiOperation({ summary: 'Create a group' })
  @Post('api/vg')
  async createGroup(@Body() dto: CreateGroupDto): Promise<GroupDto> {
    return this.groupService.createGroup(dto);
  }

  @ApiOperation({ summary: 'Update a group by id' })
  @Put('api/vg/:id')
  async updateGroupById(
    @Param('id') id: string,
    @Body() dto: UpdateGroupDto,
  ): Promise<GroupDto> {
    return this.groupService.updateGroupById(id, dto);
  }

  @ApiOperation({ summary: 'Delete a group by id' })
  @Delete('api/vg/:id')
  async deleteGroupById(@Param('id') id: string): Promise<GroupDto> {
    return this.groupService.deleteGroupById(id);
  }
}
