import { IsNumber, IsPositive, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGamesDto {
  @ApiProperty({
    description: 'Insira os dados',
  })
  name: string;
  coverImageUrl: string;
  description: string;
  year: number;
  imdbScore: number;
  trailerYouTubeUrl: string;
  gameplayYouTubeUrl: string
}