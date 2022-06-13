import { Body, Controller, Get, Param, Post, Patch, Delete, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';
import { Users } from './entities/users.entity';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateUsersDto } from './dto/update-users.dto';
import { AuthGuard } from '@nestjs/passport';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { User } from '@prisma/client';

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
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  findAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um usuário',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  findOne(@Param('id') id: string): Promise<Users> {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um usuário pelo ID',
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  update(@LoggedUser() user: User, @Param('id') id: string, @Body() dto: UpdateUsersDto): Promise<Users> {
    return this.usersService.update(user, id, dto);
  }
  
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletar usuário pelo ID'
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  delete(@LoggedUser() user: User, @Param('id') id: string) {
    return this.usersService.delete(user, id);
  }
}
