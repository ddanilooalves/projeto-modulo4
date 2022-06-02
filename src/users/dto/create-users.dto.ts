import { IsNumber, IsPositive, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUsersDto {
  @ApiProperty({
    description: 'Insira os dados',
  })
  number: number;

  name: string;

  email: string;

  password: string;

  cpf: number;
  
  isAdmin: string
}