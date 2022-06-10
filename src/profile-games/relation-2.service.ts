import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "prisma/prisma/prisma.service";
import { handleError } from "src/utility/handle-error.utility";
import { CreateProfileGamesDto } from "./dto/create-relation-2.dto";

@Injectable()
export class RelationProfileGamesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProfileGamesDto: CreateProfileGamesDto) {
    const data: Prisma.Relation2CreateInput = {
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
      game: {
        connect: createProfileGamesDto.games.map(gameId => ({
          id: gameId,
        })),
      },
    };
    try {
      return this.prisma.relation2.create({
        data,
        select: {
          id: true,
          game: {
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
    return this.prisma.relation2.findMany({
      select: {
        id: true,
        favorite: true,
        profile: {
          select: {
            name: true,
          },
        },
        game: {
          select: {
            name: true,
          },
        },
        gender: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  findOne(id: string) {
    return this.prisma.relation2.findUnique({
      where: { id },
      include: {
        gender: {
          select: {
            name: true,
          },
        },
        game: {
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
