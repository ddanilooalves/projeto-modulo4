import { Gender } from "src/genders/entities/gender.entity";

export class Relation {
  id?: string;
  gendersId: string;
  createdAt?: Date;
  updatedAt?: Date;
  gender: Gender[]
}
