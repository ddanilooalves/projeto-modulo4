import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma/prisma.service';
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

  async create(dto: CreateGamesDto): Promise<Games> {
    const data: Games = { ...dto };
    try {
      return await this.prisma.games.create({ data });
    } catch (err) {
      return handleError(err);
    }
  }

  async update(id: string, dto: UpdateGamesDto): Promise<Games> {
    await this.findById(id);
    const data: Partial<Games> = { ...dto };

    return this.prisma.games.update({
      where: { id },
      data
    }).catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.games.delete({ where: { id }});
  }
}