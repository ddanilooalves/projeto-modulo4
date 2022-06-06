import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RelationService } from './relation.service';
import { CreateRelationDto } from './dto/create-relation.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('relation')
@Controller('relation')
export class RelationController {
  constructor(private readonly relationService: RelationService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar um relações de jogos com genêros'
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
