import { IsNumber, IsPositive, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUsersDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Insira o número',
    example: 1
  })
  number: number;

  @IsString()
  @ApiProperty({
    description: 'Insira o nome',
    example: "Danilo"
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Insira o e-mail',
    example: "daniloalves@gmail.com"
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: 'Insira a senha',
    example: "12345a"
  })
  password: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Insira o número',
    example: 12345678910
  })
  cpf: number;

  @IsString()
  @ApiProperty({
    description: 'Insira o nome de usuário administrador',
    example: "XunimDelirium22"
  })
  isAdmin: string
}