import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { GendersService } from './genders.service';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Gender } from './entities/gender.entity';

@ApiTags('genders')
@Controller('genders')
export class GendersController {
  constructor(private readonly genderService: GendersService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar um genêro'
  })
  create(@Body() createGenderDto: CreateGenderDto): Promise<Gender> {
    return this.genderService.create(createGenderDto);
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
  update(@Param('id') id: string, @Body() updateGenderDto: UpdateGenderDto): Promise<Gender> {
    return this.genderService.update(id, updateGenderDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletar genêro pelo ID'
  })
  delete(@Param('id') id: string) {
    this.genderService.delete(id);
  }
}
