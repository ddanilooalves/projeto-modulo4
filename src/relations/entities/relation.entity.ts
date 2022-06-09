import { Games } from "src/games/entities/games.entity";

export class Relation {
  id?: string;
  gendersId: string;
  profileId: string;
  createdAt?: Date;
  updatedAt?: Date;
  gamers: Games[]
}