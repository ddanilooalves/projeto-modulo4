import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma/prisma.service';
import { CreateRelationDto } from './dto/create-relation.dto';

@Injectable()
export class RelationService {
  constructor(private readonly prisma: PrismaService) {}

  create(createRelationDto: CreateRelationDto) {
    return 'This action adds a new relation';
  }

  findAll() {
    return `This action returns all relation`;
  }

  findOne(id: string) {
    return `This action returns a #${id} relation`;
  }
}
