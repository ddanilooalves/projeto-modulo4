import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "prisma/prisma/prisma.service";
import { handleError } from "src/utility/handle-error.utility";
import { CreateProfileGamesDto } from "./dto/create-relation-1.dto";

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