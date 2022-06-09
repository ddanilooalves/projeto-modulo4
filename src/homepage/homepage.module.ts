import { Module } from '@nestjs/common';
import { HomepageService } from './homepage.service';
import { HomepageController } from './homepage.controller';
import { PrismaModule } from 'prisma/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [HomepageController],
  providers: [HomepageService]
})
export class HomepageModule {}
