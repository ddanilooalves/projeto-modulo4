import { Module } from '@nestjs/common';
import { RelationProfileGamesService } from './relation-2.service';
import { RelationProfileGamesController } from './relation-2.controller';
import { PrismaModule } from 'prisma/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RelationProfileGamesController],
  providers: [RelationProfileGamesService]
})
export class RelationModule {}