import express from "express";
import {
  addSchoolHandler,
  getSchoolsHandler,
} from "../controllers/schoolController";

const router = express.Router();

router.post("/addSchool", addSchoolHandler);
router.get("/listSchools", getSchoolsHandler);

export default router;
