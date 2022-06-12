import { ApiProperty } from "@nestjs/swagger";
import { User } from "@prisma/client";

export class LoginResponseDto {
    @ApiProperty({
        description: 'JWT gerado pelo login',
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbmlsb2FsdmVzQGdtYWlsLmNvbSIsImlhdCI6MTY1NTA2ODkwOCwiZXhwIjoxNjU1MTU1MzA4fQ.KNZsK87JZi9JmJJB5DDcWbpYbis0YHtBz2HH_BIjTcE',
    })
    token: string;

    @ApiProperty({
        description: 'Dados do usuário autenticado',
    })
    user: User;
}