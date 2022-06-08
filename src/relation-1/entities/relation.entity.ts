import { Games } from "@prisma/client";

export class Relation {
  id?: string;
  gendersId: string;
  profileId: string;
  createdAt?: Date;
  updatedAt?: Date;
  games?: Games[]
}
