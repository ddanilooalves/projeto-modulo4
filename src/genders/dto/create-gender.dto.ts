import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateGenderDto {
    @IsString()
    @ApiProperty({
        description: 'Insira o nome do gênero',
        example: 'Fliperama'
    })
    name: string;
}
