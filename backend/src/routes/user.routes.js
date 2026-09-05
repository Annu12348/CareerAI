import express from "express";
import userController from "../controller/user.controller.js";
import { loginValidator, registerValidator } from "../middleware/validator/user.validator.js";
import { errorValidator } from "../middleware/error.validator.js";
const router = express.Router();

const userControllers = new userController()

router.post(
    "/register",
    registerValidator,
    errorValidator,
    userControllers.register.bind(userControllers)
)

router.post(
    "/login",
    loginValidator,
    errorValidator,
    userControllers.login.bind(userControllers)
)

router.post(
    "/refresh",
    userControllers.refresh.bind(userControllers)
)

export default router;