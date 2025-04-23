import { SchoolType } from "../types/SchoolType";

export interface ISchoolRepository {
  create(schoolData: SchoolType): Promise<SchoolType>;
  getSchools(): Promise<SchoolType[]>;
}
