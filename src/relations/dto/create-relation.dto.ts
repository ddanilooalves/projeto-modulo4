import { ApiProperty } from "@nestjs/swagger";
import { Games } from "@prisma/client";
import { IsUUID } from "class-validator";

export class CreateRelationDto {
    @IsUUID()
    @ApiProperty({
      description: 'ID do genêro criado para o jogo',
      example: 'cc29d461-acbd-4a6f-b8ec-f641073f4fd6'
    })
    gendersId: string;

    @IsUUID()
    @ApiProperty({
      description: 'ID do perfil',
      example: 'cc29d461-acbd-4a6f-b8ec-f641073f4fd6'
    })
    profileId: string;

    @IsUUID(undefined, { each: true })
    @ApiProperty({
        description: 'Lista de ID´s dos jogos nos genêros',
        example: '["b8e6002e-6d86-46a5-aa54-9d2c2696b56f", "20e9aba2-3dd1-4132-92ce-5809bb5e6fa2"]'
      })
      gamers: string[];
};