import { Games } from "@prisma/client";

export class Relation {
  id?: string;
  gendersId?: string;
  profileId?: string;
  favorite?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  games?: Games[]
}
