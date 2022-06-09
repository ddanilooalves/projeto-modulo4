import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from '../prisma/prisma/prisma.module';
import { PrismaService } from '../prisma/prisma/prisma.service';
import { GamesModule } from './games/games.module';
import { ProfilesModule } from './profiles/profiles.module';
import { GendersModule } from './genders/genders.module';
import { RelationModule } from './relations/relation.module';
import { Relation2Module } from './relation-2/relation-2.module';
import { HomepageModule } from './homepage/homepage.module';

@Module({
  imports: [UsersModule, PrismaModule, GamesModule, ProfilesModule, GendersModule, RelationModule, Relation2Module, HomepageModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
