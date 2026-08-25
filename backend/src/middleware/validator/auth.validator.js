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