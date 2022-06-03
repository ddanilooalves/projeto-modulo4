import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from '../prisma/prisma/prisma.module';
import { PrismaService } from '../prisma/prisma/prisma.service';
import { GamesModule } from './games/games.module';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [UsersModule, PrismaModule, GamesModule, ProfilesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
