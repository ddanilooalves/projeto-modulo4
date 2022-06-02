import { PartialType } from '@nestjs/swagger';
import { CreateGameDto } from './create-games.dto';

export class UpdateGameDto extends PartialType(CreateGameDto) {}
