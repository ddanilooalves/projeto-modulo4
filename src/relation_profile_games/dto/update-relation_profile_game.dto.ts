import { PartialType } from '@nestjs/swagger';
import { CreateRelationProfileGameDto } from './create-relation_profile_game.dto';

export class UpdateRelationProfileGameDto extends PartialType(CreateRelationProfileGameDto) {}
