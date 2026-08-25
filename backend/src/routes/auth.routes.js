import express from "express";
import authController from "../controller/auth.controller.js";
import { registerValidator } from "../middleware/validator/auth.validator.js";
import { errorValidator } from "../middleware/error.validator.js";
const router = express.Router();

const authControllers = new authController()
router.post(
    "/register",
    registerValidator,
    errorValidator,
    authControllers.register.bind(authControllers)
)

export default router;