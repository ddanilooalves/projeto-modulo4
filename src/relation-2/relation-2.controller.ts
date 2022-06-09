import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateProfileGamesDto } from "./dto/create-relation-2.dto";
import { RelationProfileGamesService } from "./relation-2.service";

@ApiTags('relation-profile-game')
@Controller('favorite')
export class RelationProfileGamesController {
  constructor(private readonly relation2Service: RelationProfileGamesService) {}

  @Post()
  @ApiOperation({
    summary: 'Jogos salvos no perfil'
  })
  create(@Body() createProfileGamesDto: CreateProfileGamesDto) {
    return this.relation2Service.create(createProfileGamesDto);
  }
}
