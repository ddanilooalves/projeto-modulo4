import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma/prisma.service';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';
import { Users } from './entities/users.entity';
import * as bcrypt from 'bcrypt';
import { handleError } from 'src/utility/handle-error.utility';

@Injectable()
export class UsersService {
  private usersSelect = {
    id: true,
    number: true,
    name: true,
    email: true,
    password: false,
    cpf: true,
    isAdmin: true
  };

  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Users[]> {
    return this.prisma.user.findMany({
      select: this.usersSelect,
    });
  }

  async findById(id: string): Promise<Users> {
    const record = await this.prisma.user.findUnique({ 
      where: { id },
      select: this.usersSelect,
     });
    if (!record) {
      throw new NotFoundException(`Usuário com ID ${id} não localizado!`)
    }
    return record
  }

  findOne(id: string): Promise<Users> {
    return this.findById(id);
  }

  async create(dto: CreateUsersDto): Promise<Users> {
    const data: Users = { 
      ...dto,
      password: await bcrypt.hash(dto.password, 10),
     };
    return this.prisma.user.create({ 
      data, 
      select: this.usersSelect 
    }).catch(handleError);
  }

  async update(id: string, dto: UpdateUsersDto): Promise<Users> {
    await this.findById(id);
    const data: Partial<Users> = { ...dto };

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    return this.prisma.user.update({
      where: { id },
      data,
      select: this.usersSelect
    }).catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.user.delete({ where: { id }});
  }

  
}