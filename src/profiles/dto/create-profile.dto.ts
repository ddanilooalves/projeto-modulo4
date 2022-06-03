import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateProfileDto {
    @IsString()
    @ApiProperty({description: 'Inserir nome do perfil',
    example: "Daniloclient"
    })
    name: string;

    @IsString()
    @ApiProperty({description: 'Inserir URL da imagem do perfil',
    example: "..."
    })
    imageUrl: String;
}
