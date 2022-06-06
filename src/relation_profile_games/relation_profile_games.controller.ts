import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RelationProfileGamesService } from './relation_profile_games.service';
import { CreateRelationProfileGameDto } from './dto/create-relation_profile_game.dto';
import { UpdateRelationProfileGameDto } from './dto/update-relation_profile_game.dto';

@Controller('relation-profile-games')
export class RelationProfileGamesController {
  constructor(private readonly relationProfileGamesService: RelationProfileGamesService) {}

  @Post()
  create(@Body() createRelationProfileGameDto: CreateRelationProfileGameDto) {
    return this.relationProfileGamesService.create(createRelationProfileGameDto);
  }

  @Get()
  findAll() {
    return this.relationProfileGamesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.relationProfileGamesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRelationProfileGameDto: UpdateRelationProfileGameDto) {
    return this.relationProfileGamesService.update(+id, updateRelationProfileGameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.relationProfileGamesService.remove(+id);
  }
}
