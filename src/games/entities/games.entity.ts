import { Gender } from "src/genders/entities/gender.entity";
import { Profile } from "src/profiles/entities/profile.entity";

export class Games {
    id?: string;
    name: string;
    coverImageUrl: string;
    description: string;
    year: number;
    imdbScore: number;
    trailerYouTubeUrl: string;
    gameplayYouTubeUrl: string;
    createdAt?: Date;
    updatedAt?: Date;
    gender?: Gender[];
    profile?: Profile[]
  }
