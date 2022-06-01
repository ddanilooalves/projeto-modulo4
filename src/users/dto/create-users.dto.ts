import { IsNumber, IsPositive, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUsersDto {
  @IsNumber()
  @IsString()
  @IsPositive()
  @ApiProperty({
    description: 'Insira os dados',
    example: 0,
  })
  number: number;
  name: String;
  email: String;
  password: String;
  cpf: number;
  isAdmin: String
}