import { Games } from "@prisma/client";

export class Relation {
  id?: string;
  favorite: boolean;
  gendersId: string;
  profileId: string;
  createdAt?: Date;
  updatedAt?: Date;
  games?: Games[]
}
