import { Module } from '@nestjs/common';
import { RelationProfileGamesService, RelationService } from './relation.service';
import { RelationController, RelationProfileGamesController } from './relation.controller';
import { PrismaModule } from 'prisma/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RelationController, RelationProfileGamesController],
  providers: [RelationService, RelationProfileGamesService]
})
export class RelationModule {}
