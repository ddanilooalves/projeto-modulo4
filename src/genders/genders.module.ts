import { Module } from '@nestjs/common';
import { GendersService } from './genders.service';
import { GendersController } from './genders.controller';
import { PrismaModule } from 'prisma/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [GendersController],
  providers: [GendersService]
})
export class GendersModule {}
