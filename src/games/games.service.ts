import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma/prisma.service';
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
    const record = await this.prisma.games.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`Usuário com ID ${id} não localizado!`)
    }
    return record
  }

  findOne(id: string): Promise<Games> {
    return this.findById(id);
  }

  create(dto: CreateGamesDto): Promise<Games> {
    const data: Games = { ...dto };
    return this.prisma.games.create({ data }).catch(this.handleError);
  }

  async update(id: string, dto: UpdateGamesDto): Promise<Games> {
    await this.findById(id);
    const data: Partial<Games> = { ...dto };

    return this.prisma.games.update({
      where: { id },
      data,
    }).catch(this.handleError);
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.games.delete({ where: { id }});
  }

  handleError(err: Error): undefined {
    throw new UnprocessableEntityException(err.message)
  }
}