import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma/prisma.service';

@Injectable()
export class HomepageService {
  constructor(private readonly prisma: PrismaService) {}

  async findByGender(id: string) {
    const favorite = await this.prisma.profile.findUnique({
      where: {
        id,
      },
      select: {
        name: true,
        games: {
          select: {
            name: true,
          }
        },
      },
    });

    const genders = await this.prisma.gender.findMany({
      select: {
        id: true,
        name: true,
        games: {
          select: {
            name: true,
          },
        },
      },
    });
    return [{ favorite }, { genders }];
  }
}