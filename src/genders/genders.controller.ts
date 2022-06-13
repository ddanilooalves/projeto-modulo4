import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { GendersService } from './genders.service';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Gender } from './entities/gender.entity';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { LoggedUser } from 'src/auth/logged-user.decorator';

@ApiTags('genders')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('genders')
export class GendersController {
  constructor(private readonly genderService: GendersService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar um genêro'
  })
  create(@LoggedUser() user: User, @Body() createGenderDto: CreateGenderDto): Promise<Gender> {
    return this.genderService.create(user, createGenderDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos os genêros'
  })
  findAll(): Promise<Gender[]> {
    return this.genderService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar genêro pelo ID'
  })
  findOne(@Param('id') id: string): Promise<Gender> {
    return this.genderService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar genêro pelo ID'
  })
  update(@LoggedUser() user: User, @Param('id') id: string, @Body() updateGenderDto: UpdateGenderDto): Promise<Gender> {
    return this.genderService.update(user, id, updateGenderDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletar genêro pelo ID'
  })
  delete(@LoggedUser() user: User, @Param('id') id: string) {
    this.genderService.delete(user, id);
  }
}
