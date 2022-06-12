import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { CreateRelationDto } from './dto/create-relation.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RelationService } from './relation.service';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('relation-genders-games')
@UseGuards(AuthGuard())
@ApiBearerAuth()
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
    summary: 'Listar jogos em seus respectivos genêros'
  })
  findAll() {
    return this.relationService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar jogos em seus respectivos genêros por ID'
  })
  findOne(@Param('id') id: string) {
    return this.relationService.findOne(id);
  }
};

