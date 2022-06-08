import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateRelationDto } from './dto/create-relation.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RelationService } from './relation.service';

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
};

