import { ApiProperty } from "@nestjs/swagger";
import { User } from "@prisma/client";

export class LoginResponseDto {
    @ApiProperty({
        description: 'JWT gerado pelo login',
        example: 'Token_gerado_Automaticamente',
    })
    token: string;

    @ApiProperty({
        description: 'Dados do usuário autenticado',
    })
    user: User;
}