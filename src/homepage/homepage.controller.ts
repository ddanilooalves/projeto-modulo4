import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HomepageService } from './homepage.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('homepage')
@Controller('homepage')
export class HomepageController {
  constructor(private readonly homepageService: HomepageService) {}

  @ApiOperation({
    summary: 'HomePage'
  })
  @Get(':id')
  findByGender(@Param('id') id: string) {
    return this.homepageService.findByGender(id);
  }
}
