import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma/prisma.service';

@Injectable()
export class HomepageService {
  constructor(private readonly prisma: PrismaService) {}

  async findByGender(id: string) {
    const profiles = await this.prisma.relation2.findUnique({
      where: {
        id,
      },
      select: {
        game: true,
      },
    });

    const genders = await this.prisma.relation.findMany({
      select: {
        id: true,
        gamers: true,
      },
    });
    return [{ profiles }, { genders }];
  }
}
