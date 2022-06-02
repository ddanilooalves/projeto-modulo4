import { Injectable } from '@nestjs/common';
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

  findOne(id: string): Promise<Users> {
    return this.prisma.user.findUnique({ where: { id }})
  }

  create(dto: CreateUsersDto): Promise<Users> {
    const data: Users = { ...dto };
 
    return this.prisma.user.create({ data });
  }

  update(id: string, dto: UpdateUsersDto): Promise<Users> {
    const data: Partial<Users> = { ...dto };

    return this.prisma.user.update({
      where: { id },
      data,
    });
  }
}