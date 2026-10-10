import express from "express";
import userController from "../controller/user.controller.js";
import { forgetPasswordValidation, loginValidator, registerValidator, resetPasswordValidator, verifyOtpValidation } from "../middleware/validator/user.validator.js";
import { errorValidator } from "../middleware/error.validator.js";
import { forgetPasswordLimiter, verifyOtpLimiter } from "../middleware/rateLimiter.middleware.js";
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

router.post(
    "/forget-password",
    forgetPasswordValidation,
    errorValidator,
    forgetPasswordLimiter,    
    userControllers.forgetPassword.bind(userControllers)
)

router.post(
    "/otp-verify",
    verifyOtpValidation,
    errorValidator,
    verifyOtpLimiter,
    userControllers.otpVerify.bind(userControllers)
)

router.post(
    "/reset-password",
    resetPasswordValidator,
    errorValidator,
    userControllers.updatePasswordByEmail.bind(userControllers)
)

export default router;