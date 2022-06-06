import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from '../prisma/prisma/prisma.module';
import { PrismaService } from '../prisma/prisma/prisma.service';
import { GamesModule } from './games/games.module';
import { ProfilesModule } from './profiles/profiles.module';
import { GendersModule } from './genders/genders.module';
import { RelationModule } from './relation_genders_games/relation.module';
import { RelationProfileGamesModule } from './relation_profile_games/relation_profile_games.module';

@Module({
  imports: [UsersModule, PrismaModule, GamesModule, ProfilesModule, GendersModule, RelationModule, RelationProfileGamesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
