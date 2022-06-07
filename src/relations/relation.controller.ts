import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { RelationService } from './relation.service';
import { CreateRelationDto } from './dto/create-relation.dto';
import { CreateProfileGamesDto } from './dto/create-profilegames-dto'
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('relation')
@Controller('relation')
export class RelationController {
  constructor(private readonly relationService: RelationService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar relações'
  })
  create(@Body() createRelationDto: CreateRelationDto) {
    return this.relationService.create(createRelationDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todas as relações'
  })
  findAll() {
    return this.relationService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar relações por ID'
  })
  findOne(@Param('id') id: string) {
    return this.relationService.findOne(id);
  }
}

@Controller('relation')
export class RelationProfileGamesController {
  constructor(private readonly relationService: RelationService) {}

  @Put()
  @ApiOperation({
    summary: 'Jogos salvos no perfil'
  })
  create(@Body() createProfileGamesDto: CreateProfileGamesDto) {
    return this.relationService.create(createProfileGamesDto);
  }
}
