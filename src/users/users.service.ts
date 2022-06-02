import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma/prisma.service';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-table.dto';
import { Users } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Users[]> {
    return this.prisma.user.findMany();
  }

  async findById(id: string): Promise<Users> {
    const record = await this.prisma.user.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`Usuário com ID ${id} não localizado!`)
    }
    return record
  }

  findOne(id: string): Promise<Users> {
    return this.findById(id);
  }

  create(dto: CreateUsersDto): Promise<Users> {
    const data: Users = { ...dto };
    return this.prisma.user.create({ data }).catch(this.handleError);
  }

  async update(id: string, dto: UpdateUsersDto): Promise<Users> {
    await this.findById(id);
    const data: Partial<Users> = { ...dto };

    return this.prisma.user.update({
      where: { id },
      data,
    }).catch(this.handleError);
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.user.delete({ where: { id }});
  }

  handleError(err: Error): undefined {
    throw new UnprocessableEntityException(err.message)
  }
}