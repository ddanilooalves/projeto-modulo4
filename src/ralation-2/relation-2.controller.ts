import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateProfileGamesDto } from "./dto/create-relation-1.dto";
import { RelationProfileGamesService } from "./relation-2.service";

@ApiTags('relation-profile-game')
@Controller('favorite')
export class RelationProfileGamesController {
  constructor(private readonly relationsService: RelationProfileGamesService) {}

  @Post()
  @ApiOperation({
    summary: 'Jogos salvos no perfil'
  })
  create(@Body() createProfileGamesDto: CreateProfileGamesDto) {
    return this.relationsService.create(createProfileGamesDto);
  }
};