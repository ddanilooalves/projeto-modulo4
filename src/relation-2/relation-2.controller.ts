import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateProfileGamesDto } from "./dto/create-relation-2.dto";
import { RelationProfileGamesService } from "./relation-2.service";

@ApiTags('relation-profile-games')
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

  @Get()
  @ApiOperation({
    summary: 'Listar jogos salvos e favoritos no perfil'
  })
  findAll() {
    return this.relation2Service.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar jogos salvos e favoritos no perfil por ID'
  })
  findOne(@Param('id') id: string) {
    return this.relation2Service.findOne(id);
  }
}
