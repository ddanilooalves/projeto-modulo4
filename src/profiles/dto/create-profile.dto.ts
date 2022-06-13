import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";

export class CreateProfileDto {
    @IsString()
    @ApiProperty({description: 'Inserir nome do perfil',
    example: 'Daniloclient'
    })
    name: string;

    @IsString()
    @ApiProperty({description: 'Inserir URL da imagem do perfil',
    example: '...'
    })
    imageUrl: string;

    @IsUUID()
    @ApiProperty({
        description: 'Id do usuario para criação do perfil',
        example: '5c3c7e08-6530-4fd3-9100-d4d87bc6546f'
    })
    userId: string;

    @IsUUID(undefined, { each: true })
    @ApiProperty({
        description: 'Id do jogo do perfil',
        example: ["eb5d0759-86b0-483b-9105-99c7e1796dce"]
    })
    games: string[];
}
