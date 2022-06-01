import { IsNumber, IsPositive, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUsersDto {
  @ApiProperty({
    description: 'Insira os dados',
  })
  number: number;
  name: String;
  email: String;
  password: String;
  cpf: number;
  isAdmin: String
}