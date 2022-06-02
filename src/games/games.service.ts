import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-games.dto';
import { UpdateGameDto } from './dto/update-games.dto';

@Injectable()
export class GamesService {
  create(createGameDto: CreateGameDto) {
    return 'This action adds a new game';
  }

  findAll() {
    return `This action returns all games`;
  }

  findOne(id: string) {
    return `This action returns a #${id} game`;
  }

  update(id: string, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

  delete(id: string) {
    return `This action removes a #${id} game`;
  }
}
