import express from "express";
import userController from "../controller/user.controller.js";
import { forgetPasswordValidation, loginValidator, registerValidator, resetPasswordValidator, verifyOtpValidation } from "../middleware/validator/user.validator.js";
import { errorValidator } from "../middleware/error.validator.js";
import { forgetPasswordLimiter, verifyOtpLimiter } from "../middleware/rateLimiter.middleware.js";
import { authenticationUser } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/upload.middleware.js";
import GoogleController from "../controller/google.controller.js";
import GithubController from "../controller/github.controller.js";
const router = express.Router();

const userControllers = new userController()
const GoogleControllers = new GoogleController()
const GithubControllers = new GithubController()

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

router.patch(
    "/profile-image",
    authenticationUser,
    upload.single("image"),
    userControllers.updateProfileImage.bind(userControllers)
)

router.get(
    "/google/signup",
    GoogleControllers.googleSignupInit.bind(GoogleControllers)
)

router.get(
    "/google/login",
    GoogleControllers.googleLoginInit.bind(GoogleControllers)
)

router.get(
    "/google/callback",
    GoogleControllers.googleCallback.bind(GoogleControllers)
)

router.get(
    "/github/signup",
    GithubControllers.githubSignupInit.bind(GithubControllers)
)

router.get(
    "/github/login",
    GithubControllers.githubLoginInit.bind(GithubControllers)
)

router.get(
    "/github/callback",
    GithubControllers.githubCallback.bind(GithubControllers)
)

export default router;
