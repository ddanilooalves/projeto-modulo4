import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'prisma/prisma/prisma.service';
import { UnsubscriptionError } from 'rxjs';
import { handleError } from 'src/utility/handle-error.utility';
import { CreateGamesDto } from './dto/create-games.dto';
import { UpdateGamesDto } from './dto/update-games.dto';
import { Games } from './entities/games.entity';

@Injectable()
export class GamesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Games[]> {
    return this.prisma.games.findMany();
  }

  async findById(id: string): Promise<Games> {
    const records = await this.prisma.games.findUnique({ where: { id } });
    if (!records) {
      throw new NotFoundException(`Jogo com ID ${id} não localizado!`)
    }
    return records;
  }

  findOne(id: string): Promise<Games> {
    return this.findById(id);
  }

  async create(user: User, dto: CreateGamesDto) {
    if (!user.isAdmin) {
      throw new UnauthorizedException('Usuário não se encaixa na categória admin')
    }
    const data: Prisma.GamesCreateInput = {
      ...dto,
      gender: {
        connect: dto.gender.map((genderId)=> ({
        id: genderId
      }))}
      };

      return await this.prisma.games.create({ 
        data, 
        select: {
          id: true,
          name: true,
          gender: {
            select: {
              name: true,
              },
            },
          }}).catch(handleError);
  }

  async update(user: User, id: string, dto: UpdateGamesDto): Promise<Games> {
    if (!user.isAdmin) {
      throw new UnauthorizedException('Usuário não se encaixa na categória admin')
    }
    await this.findById(id);
    const data: Partial<Prisma.GamesCreateInput> = { ...dto,
      gender: {connect: dto.gender.map((genderId) => ({
        id: genderId
      }))}
    };

    return this.prisma.games.update({
      where: { id },
      data,
    }).catch(handleError);
  }

  async delete(user: User, id: string) {
    if (!user.isAdmin) {
      throw new UnauthorizedException('Usuário não se encaixa na categória admin')
    }
    await this.findById(id);
    await this.prisma.games.delete({ where: { id }}).catch(handleError);
  }
}