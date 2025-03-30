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
import { GroupListDto } from '../dto/group/group.list.dto';
import { GroupDto } from '../dto/group/group.dto';

@ApiTags('Logical Volume Managment/Group')
@Controller()
export class LvmGroupController implements LvmController {
  constructor(private readonly groupService: LvmGroupService) {}

  @ApiOperation({ summary: 'Get all groups' })
  @Get('api/vg')
  async getGroups(): Promise<GroupListDto> {
    return await this.groupService.getGroups();
  }

  @ApiOperation({ summary: 'Get a group by its id' })
  @Get('api/vg/:groupId')
  async getGroupById(@Param('groupId') groupId: string): Promise<GroupDto> {
    return await this.groupService.getGroupById(groupId);
  }

  @ApiOperation({ summary: 'Create a group' })
  @Post('api/vg')
  async createGroup(@Body() dto: CreateGroupDto): Promise<GroupDto> {
    return await this.groupService.createGroup(dto);
  }

  @ApiOperation({ summary: 'Delete a group by its id' })
  @Delete('api/vg/:groupId')
  async deleteGroupById(@Param('groupId') groupId: string): Promise<GroupDto> {
    return await this.groupService.deleteGroupById(groupId);
  }
}
