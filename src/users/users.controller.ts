import { Body, Controller, Get, Param, Post, Patch, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';
import { Users } from './entities/users.entity';
import { UsersService } from './users.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateUsersDto } from './dto/update-users.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  @ApiOperation({
    summary: 'Criar um usuário',
  })
  create(@Body() dto: CreateUsersDto): Promise<Users> {
    return this.usersService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos os usuários',
  }) 
  findAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um usuário',
  })
  findOne(@Param('id') id: string): Promise<Users> {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um usuário pelo ID',
  })
  update(@Param('id') id: string, @Body() dto: UpdateUsersDto): Promise<Users> {
    return this.usersService.update(id, dto);
  }
  
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletar usuário pelo ID'
  })
  delete(@Param('id') id: string) {
    this.usersService.delete(id);
  }
}
