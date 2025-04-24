import { ISchoolRepository } from "../interface/ISchoolRepository";
import { SchoolType } from "../types/SchoolType";

export class SchoolService {
  private _repository: ISchoolRepository;

  constructor(repository: ISchoolRepository) {
    this._repository = repository;
  }

  deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  getDistanceInKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  async addSchool(schoolData: SchoolType) {
    const checkExisting = await this._repository.findFirst({
      where: {
        address: schoolData.address
      }
    });

    if(checkExisting){
      throw new Error("School Already Exists!");
    }
    const school = await this._repository.create(schoolData);
    if (!school.id) {
      throw new Error("Unable to add the school.");
    }
    return school;
  }

  async getSchools(longitude: number, latitude: number) {
    const schools = await this._repository.getSchools();
    if (schools.length === 0) {
      throw new Error("No Schools Exists");
    }

    const schoolsWithDistance = schools.map((school) => {
      const distance = this.getDistanceInKm(
        latitude,
        longitude,
        school.latitude,
        school.longitude
      );

      return { ...school, distance };
    });

    const sortedSchools = schoolsWithDistance.sort(
      (a, b) => a.distance - b.distance
    );

    console.log(sortedSchools);

    return sortedSchools;
  }
}
