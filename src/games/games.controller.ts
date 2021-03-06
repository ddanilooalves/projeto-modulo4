import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGamesDto } from './dto/create-games.dto';
import { UpdateGamesDto } from './dto/update-games.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Games } from './entities/games.entity';
import { AuthGuard } from '@nestjs/passport';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { User } from '@prisma/client';

@ApiTags('games')
@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar um jogo'
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  create(@LoggedUser() user: User, @Body() createGamesDto: CreateGamesDto) {
    return this.gamesService.create(user, createGamesDto);
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
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  update(@LoggedUser() user: User, @Param('id') id: string, @Body() updateGamesDto: UpdateGamesDto): Promise<Games> {
    return this.gamesService.update(user, id, updateGamesDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletar jogo pelo ID'
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  delete(@LoggedUser() user: User, @Param('id') id: string) {
    return this.gamesService.delete(user, id);
  }
}
