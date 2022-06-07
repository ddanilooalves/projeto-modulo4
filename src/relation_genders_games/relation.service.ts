import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma/prisma.service';
import { handleError } from 'src/utility/handle-error.utility';
import { CreateRelationDto } from './dto/create-relation.dto';

@Injectable()
export class RelationService {
  constructor(private readonly prisma: PrismaService) {}

  create(createRelationDto: CreateRelationDto) {
    const data: Prisma.RelationCreateInput = {
      gender: {
        connect: {
          id: createRelationDto.gendersId,
        },
      },
      profile: {
        connect: {
          id: createRelationDto.profileId
        }
      },
      games: {
        connect: createRelationDto.games.map(gameId => ({
          id: gameId,
        })),
      },
    };
    return  this.prisma.relation.create({ 
      data,
      select: {
        id: true,
        games: {
          select: {
            name: true
          }
        }
      }
     }).catch(handleError);
  }

  findAll() {
    return this.prisma.relation.findMany({
      select: {
        id: true,
        games: true,
        gender: true
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
}
