import { NextFunction, Request, Response } from "express";
import { SchoolRepository } from "../../repository/SchoolRepository";
import { SchoolService } from "../../services/schoolService";
import { RequestValidator } from "../../utils/requestValidator";
import { CreateSchoolRequest } from "../../dto/school.dto";

const schoolService = new SchoolService(new SchoolRepository());

export const addSchoolHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { errors, input } = await RequestValidator(
      CreateSchoolRequest,
      req.body
    );

    if (errors) {
      res.status(400).json(errors);
    }

    const data = await schoolService.addSchool(input);
    res.status(201).json(data);
  } catch (error) {
    const err = error as Error;
    next(err.message);
  }
};

export const getSchoolsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const longitude = req.query.lon as unknown as number;
    const latitude = req.query.lat as unknown as number;

    if(!longitude || !latitude){
      throw new Error("Please provide both longitude and latitude");
    }

    const data = await schoolService.getSchools(longitude, latitude);

    res.status(201).json(data);
  } catch (error) {
    const err = error as Error;
    next(err.message);
  }
};
