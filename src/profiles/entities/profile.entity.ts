import { Games } from "src/games/entities/games.entity";
import { Users } from "src/users/entities/users.entity";

export class Profile {
  id?: string;
  name: string;
  imageUrl: string;
  createdAt?: Date;
  updatedAt?: Date;
  user?: Users[];
  games?: Games[]
}