import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma/prisma.service';
import { handleError } from 'src/utility/handle-error.utility';
import { CreateRelationDto } from './dto/create-relation.dto';
import { CreateProfileGamesDto } from '../relations/dto/create-relation.dto'

@Injectable()
export class RelationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createRelationDto: CreateRelationDto) {
    const data: Prisma.RelationCreateInput = {
      gender: {
        connect: {
          id: createRelationDto.gendersId,
        },
      },
      profile: {
        connect: {
          id: createRelationDto.profileId,
        },
      },
      games: {
        connect: createRelationDto.games.map(gameId => ({
          id: gameId,
        })),
      },
      favorite: createRelationDto.favorite,
    };
    try {
      return await this.prisma.relation.create({
        data,
        select: {
          id: true,
          games: {
            select: {
              name: true
            }
          },
          favorite: true
        }
      });
    } catch (err) {
      return handleError(err);
    }
  }

  findAll() {
    return this.prisma.relation.findMany({
      select: {
        id: true,
        games: true,
        gender: true,
        favorite: true
      }
    });
  }

  findOne(id: string) {
    return this.prisma.relation.findUnique({
      where: { id },
      include: {
        gender: {
          select: {
            name: true,
          },
        },
        games: {
          select: {
            id: true,
            name: true,
            coverImageUrl: true
          },
        },
      }
    });
  }
};

@Injectable()
export class RelationProfileGamesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProfileGamesDto: CreateProfileGamesDto) {
    const data: Prisma.RelationCreateInput = {
      gender: {
        connect: {
          id: createProfileGamesDto.gendersId,
        },
      },
      profile: {
        connect: {
          id: createProfileGamesDto.profileId
        }
      },
      favorite: createProfileGamesDto.favorite,
      games: {
        connect: createProfileGamesDto.games.map(gameId => ({
          id: gameId,
        })),
      },
    };
    try {
      return this.prisma.relation.create({
        data,
        select: {
          id: true,
          games: {
            select: {
              name: true
            }
          }
        }
      });
    } catch (err) {
      return handleError(err);
    }
  }
}