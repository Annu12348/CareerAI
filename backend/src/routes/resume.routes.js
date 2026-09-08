import express from "express";
import { authenticationUser } from "../middleware/auth.middleware.js";
import ResumeController from "../controller/resume.controller.js";
import { authorize } from "../middleware/authorize.middleware.js";
const router = express.Router();

const ResumeControllers = new ResumeController()

router.post(
    "/create",
    authenticationUser,
    authorize("user"),
    ResumeControllers.create.bind(ResumeControllers)
)

export default router;