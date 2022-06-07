import { Games } from "@prisma/client";

export class Favorite {
  id?: string;
  favorite: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  games?: Games[]
}

