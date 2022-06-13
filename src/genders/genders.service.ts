import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'prisma/prisma/prisma.service';
import { handleError } from 'src/utility/handle-error.utility';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { Gender } from './entities/gender.entity';

@Injectable()
export class GendersService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Gender[]> {
    return this.prisma.gender.findMany();
  }

  async findById(id: string): Promise<Gender> {
    const records = await this.prisma.gender.findUnique({ where: { id } });
    if (!records) {
      throw new NotFoundException(`Perfil com ID ${id} não localizado!`)
    }
    return records;
  }

  findOne(id: string): Promise<Gender> {
    return this.findById(id);
  }

  async create(user: User, dto: CreateGenderDto): Promise<Gender> {
    if (!user.isAdmin) {
      throw new UnauthorizedException('Usuário não se encaixa na categória admin')
    }
    
    const data: Gender = { ...dto };
    try {
      return await this.prisma.gender.create({ data });
    } catch (err) {
      return handleError(err);
    }
  }

  async update(user: User, id: string, dto: UpdateGenderDto): Promise<Gender> {
    if (!user.isAdmin) {
      throw new UnauthorizedException('Usuário não se encaixa na categória admin')
    }

    await this.findById(id);
    const data: Partial<Gender> = { ...dto };

    return this.prisma.gender.update({
      where: { id },
      data
    }).catch(handleError);
  }

  async delete(user: User, id: string) {
    if (!user.isAdmin) {
      throw new UnauthorizedException('Usuário não se encaixa na categória admin')
    }
    
    await this.findById(id);
    await this.prisma.gender.delete({ where: { id }});
  }
}
