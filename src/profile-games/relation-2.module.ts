import { Module } from '@nestjs/common';
import { RelationProfileGamesService } from './relation-2.service';
import { RelationProfileGamesController } from './relation-2.controller';
import { PrismaModule } from 'prisma/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PrismaModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [RelationProfileGamesController],
  providers: [RelationProfileGamesService]
})
export class Relation2Module {}