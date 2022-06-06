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
      games: {
        connect: createRelationDto.games.map(gameId => ({
          id: gameId,
        })),
      }
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
    return `This action returns all relation`;
  }

  findOne(id: string) {
    return `This action returns a #${id} relation`;
  }
}
