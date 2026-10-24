import express from "express";
import { authenticationUser } from "../middleware/auth.middleware.js";
import ResumeController from "../controller/resume.controller.js";
import { authorize } from "../middleware/authorize.middleware.js";
import { createResumeValidator } from "../middleware/validator/resume.validator.js";
import { errorValidator } from "../middleware/error.validator.js";
import { upload } from "../middleware/upload.middleware.js";
const router = express.Router();

const ResumeControllers = new ResumeController()

router.post(
    "/create",
    authenticationUser,
    authorize("user"),
    createResumeValidator,
    errorValidator,
    ResumeControllers.create.bind(ResumeControllers)
)

router.patch(
    "/:resumeId/profile-image",
    authenticationUser,
    upload.single("image"),
    ResumeControllers.updateResumeProfileImage.bind(ResumeControllers)
)

export default router;