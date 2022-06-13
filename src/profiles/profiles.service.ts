import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma/prisma.service';
import { handleError } from 'src/utility/handle-error.utility';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfilesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Profile[]> {
    return this.prisma.profile.findMany();
  }

  async findById(id: string): Promise<Profile> {
    const records = await this.prisma.profile.findUnique({ where: { id } });
    if (!records) {
      throw new NotFoundException(`Perfil com ID ${id} não localizado!`)
    }
    return records;
  }

  findOne(id: string): Promise<Profile> {
    return this.findById(id);
  }

  async create(dto: CreateProfileDto): Promise<Profile> {
    const data: Prisma.ProfileCreateInput = {
      name: dto.name,
      imageUrl: dto.imageUrl,
      user: {
        connect: {
          id: dto.userId,
        },
      },
      games: {
        connect: dto.games.map((gameId) => ({
          id: gameId,
        })),
      },
    };
    try {
      return await this.prisma.profile.create({ data });
    } catch (err) {
      return handleError(err);
    }
  }

  async update(id: string, dto: UpdateProfileDto): Promise<Profile> {
    await this.findById(id);
    const data: Partial<Prisma.ProfileCreateInput> = {
      user: {
        connect: {
          id: dto.userId,
        },
      },
      ...dto,
      games: {
        connect: dto.games.map((gameId) => ({
          id: gameId,
        })),
      },
    };

    return this.prisma.profile.update({
      where: { id },
      data
    }).catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.profile.delete({ where: { id }});
  }
}
