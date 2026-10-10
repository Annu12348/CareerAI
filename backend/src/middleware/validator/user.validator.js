import { body } from "express-validator";

export const registerValidator = [
    body("firstName")
        .trim()
        .notEmpty()
        .withMessage("First name is required")
        .isString()
        .withMessage("First name must be a string")
        .isLength({ min: 2, max: 50 })
        .withMessage("First name must be between 2 and 50 characters"),
    body("lastName")
        .trim()
        .notEmpty()
        .withMessage("Last name is required")
        .isString()
        .withMessage("Last name must be a string")
        .isLength({ min: 2, max: 50 })
        .withMessage("Last name must be between 2 and 50 characters"),
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Please provide a valid email address")
        .normalizeEmail(),
    body("password")
        .notEmpty()
        .withMessage("Password is required")
        .isString()
        .withMessage("Password must be a string")
        .isLength({ min: 8, max: 128 })
        .withMessage("Password must be between 8 and 128 characters"),
]

export const loginValidator = [
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Please enter a valid email")
        .normalizeEmail(),

    body("password")
        .notEmpty()
        .withMessage("Password is required")
        .isString()
        .withMessage("Password must be a string"),
];

export const forgetPasswordValidation = [
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Please provide a valid email")
        .normalizeEmail()
]

export const verifyOtpValidation = [
    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Please provide a valid email")
        .normalizeEmail(),

    body("otp")
        .trim()
        .notEmpty()
        .withMessage("OTP is required")
        .isLength({ min: 6, max: 6 })
        .withMessage("OTP must be 6 digits")
        .isNumeric()
        .withMessage("OTP must contain only numbers")
];
export const resetPasswordValidator = [
    body("newPassword")
        .trim()
        .notEmpty()
        .withMessage("New password is required")

        .isLength({ min: 8, max: 128 })
        .withMessage("Password must be between 8 and 128 characters")

        .matches(/[A-Z]/)
        .withMessage("Password must contain at least one uppercase letter")

        .matches(/[a-z]/)
        .withMessage("Password must contain at least one lowercase letter")

        .matches(/[0-9]/)
        .withMessage("Password must contain at least one number")

        .matches(/[^A-Za-z0-9]/)
        .withMessage("Password must contain at least one special character"),

    body("confirmPassword")
        .trim()
        .notEmpty()
        .withMessage("Confirm password is required")

        .custom((confirmPassword, { req }) => {
            if (confirmPassword !== req.body.newPassword) {
                throw new Error("Passwords do not match");
            }

            return true;
        }),
];