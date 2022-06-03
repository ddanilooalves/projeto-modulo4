import { IsNumber, IsPositive, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGamesDto {
  @IsString()
  @ApiProperty({
    description: 'Insira o nome do jogo',
    example: "Pac Man"
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'Insira a URL da imagem do jogo',
    example: "...."
  })
  coverImageUrl: string;

  @IsString()
  @ApiProperty({
    description: 'Insira a descrição do jogo',
    example: "Jogo retrô de fliperama..."
  })
  description: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Insira o ano que o jogo foi criado',
    example: 2022
  })
  year: number;

  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Insira o score do jogo',
    example: 10
  })
  imdbScore: number;

  @IsString()
  @ApiProperty({
    description: 'Insira a URL do YouTube do trailer do jogo',
    example: "..."
  })
  trailerYouTubeUrl: string;

  @IsString()
  @ApiProperty({
    description: 'Insira a URL do YouTube da jogabilidade do jogo',
    example: "..."
  })
  gameplayYouTubeUrl: string
}