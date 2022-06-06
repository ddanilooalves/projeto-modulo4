import { Injectable } from '@nestjs/common';
import { CreateRelationProfileGameDto } from './dto/create-relation_profile_game.dto';
import { UpdateRelationProfileGameDto } from './dto/update-relation_profile_game.dto';

@Injectable()
export class RelationProfileGamesService {
  create(createRelationProfileGameDto: CreateRelationProfileGameDto) {
    return 'This action adds a new relationProfileGame';
  }

  findAll() {
    return `This action returns all relationProfileGames`;
  }

  findOne(id: number) {
    return `This action returns a #${id} relationProfileGame`;
  }

  update(id: number, updateRelationProfileGameDto: UpdateRelationProfileGameDto) {
    return `This action updates a #${id} relationProfileGame`;
  }

  remove(id: number) {
    return `This action removes a #${id} relationProfileGame`;
  }
}
