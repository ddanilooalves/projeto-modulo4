import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGamesDto } from './dto/create-games.dto';
import { UpdateGamesDto } from './dto/update-games.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Games } from './entities/games.entity';

@ApiTags('games')
@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar um jogo'
  })
  create(@Body() createGamesDto: CreateGamesDto): Promise<Games> {
    return this.gamesService.create(createGamesDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos os jogos'
  })
  findAll(): Promise<Games[]> {
    return this.gamesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar jogo pelo ID'
  })
  findOne(@Param('id') id: string): Promise<Games> {
    return this.gamesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar jogo pelo ID'
  })
  update(@Param('id') id: string, @Body() updateGamesDto: UpdateGamesDto): Promise<Games> {
    return this.gamesService.update(id, updateGamesDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletar jogo pelo ID'
  })
  delete(@Param('id') id: string) {
    this.gamesService.delete(id);
  }
}
