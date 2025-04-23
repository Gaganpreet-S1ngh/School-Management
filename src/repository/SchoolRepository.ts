import { PrismaClient } from "@prisma/client";
import { ISchoolRepository } from "../interface/ISchoolRepository";
import { SchoolType } from "../types/SchoolType";

export class SchoolRepository implements ISchoolRepository {
  private _prisma: PrismaClient;

  constructor() {
    this._prisma = new PrismaClient();
  }

  async create(schoolData: SchoolType): Promise<SchoolType> {
    return this._prisma.school.create({
      data: {
        name: schoolData.name as string,
        address: schoolData.address as string,
        longitude: schoolData.longitude as number,
        latitude: schoolData.latitude as number,
      },
    });
  }

  async getSchools(): Promise<SchoolType[]> {
    return this._prisma.school.findMany();
  }
}
