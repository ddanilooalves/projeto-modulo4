import { IsNumber, IsPositive, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGamesDto {
  @IsString()
  @ApiProperty({
    description: 'Criar novo jogo',
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
  gameplayYouTubeUrl: string;

  @IsUUID(undefined, {each: true})
  @ApiProperty({
    description: "ID do genero de jogos",
    example: ['4e80c9ef-1827-4ab2-a2a9-c00d09f9f1f6']
  })
  gender: string[];
}