import { Module } from '@nestjs/common';
import { RelationProfileGamesService } from './relation_profile_games.service';
import { RelationProfileGamesController } from './relation_profile_games.controller';

@Module({
  controllers: [RelationProfileGamesController],
  providers: [RelationProfileGamesService]
})
export class RelationProfileGamesModule {}
