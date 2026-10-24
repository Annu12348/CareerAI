import { body } from "express-validator";

export const createResumeValidator = [
    body("title")
        .exists()
        .withMessage("Resume title is required")
        .bail()
        .isString()
        .withMessage("Resume title must be a string")
        .bail()
        .trim()
        .notEmpty()
        .withMessage("Resume title cannot be empty")
        .bail()
        .isLength({ min: 2, max: 100 })
        .withMessage("Resume title must be between 2 and 100 characters"),

    body("personalInfo")
        .exists()
        .withMessage("Personal information is required")
        .bail()
        .isObject({ strict: true })
        .withMessage("Personal information must be an object"),

    body("personalInfo.fullName")
        .exists()
        .withMessage("Full name is required")
        .bail()
        .isString()
        .withMessage("Full name must be a string")
        .bail()
        .trim()
        .notEmpty()
        .withMessage("Full name cannot be empty")
        .bail()
        .isLength({ min: 2, max: 100 })
        .withMessage("Full name must be between 2 and 100 characters"),

    body("personalInfo.email")
        .exists()
        .withMessage("Email is required")
        .bail()
        .isString()
        .withMessage("Email must be a string")
        .bail()
        .trim()
        .isEmail()
        .withMessage("Please provide a valid email address")
        .bail()
        .normalizeEmail(),

    body("personalInfo.phone")
        .optional()
        .isString()
        .withMessage("Phone must be a string")
        .bail()
        .trim()
        .isLength({ max: 30 })
        .withMessage("Phone cannot exceed 30 characters"),

    body("personalInfo.location")
        .optional()
        .isString()
        .withMessage("Location must be a string")
        .bail()
        .trim()
        .isLength({ max: 150 })
        .withMessage("Location cannot exceed 150 characters"),

    body("personalInfo.profileImage")
        .optional()
        .isURL({ protocols: ["https"], require_protocol: true })
        .withMessage("Profile image must be a valid HTTPS URL"),


    body("personalInfo.linkedin")
        .optional()
        .isURL({ protocols: ["https"], require_protocol: true })
        .withMessage("LinkedIn must be a valid HTTPS URL"),

    body("personalInfo.github")
        .optional()
        .isURL({ protocols: ["https"], require_protocol: true })
        .withMessage("GitHub must be a valid HTTPS URL"),

    body("personalInfo.portfolio")
        .optional()
        .isURL({ protocols: ["https"], require_protocol: true })
        .withMessage("Portfolio must be a valid HTTPS URL"),

    body("summary")
        .optional()
        .isString()
        .withMessage("Summary must be a string")
        .bail()
        .trim()
        .isLength({ max: 3000 })
        .withMessage("Summary cannot exceed 3000 characters"),

    body("skills")
        .optional()
        .isArray({ max: 100 })
        .withMessage("Skills must be an array with at most 100 items"),

    body("skills.*")
        .optional()
        .isObject({ strict: true })
        .withMessage("Each skill must be an object"),

    body("skills.*.name")
        .if(body("skills.*").exists())
        .isString()
        .withMessage("Skill name must be a string")
        .bail()
        .trim()
        .notEmpty()
        .withMessage("Skill name is required")
        .bail()
        .isLength({ max: 100 })
        .withMessage("Skill name cannot exceed 100 characters"),

    body("skills.*.level")
        .optional()
        .isIn(["beginner", "intermediate", "advanced", "expert"])
        .withMessage("Invalid skill level"),

    body("education")
        .optional()
        .isArray({ max: 20 })
        .withMessage("Education must be an array with at most 20 items"),

    body("education.*.degree")
        .if(body("education.*").exists())
        .isString()
        .withMessage("Degree must be a string")
        .bail()
        .trim()
        .notEmpty()
        .withMessage("Degree is required")
        .bail()
        .isLength({ max: 150 })
        .withMessage("Degree cannot exceed 150 characters"),

    body("education.*.institution")
        .if(body("education.*").exists())
        .isString()
        .withMessage("Institution must be a string")
        .bail()
        .trim()
        .notEmpty()
        .withMessage("Institution is required")
        .bail()
        .isLength({ max: 200 })
        .withMessage("Institution cannot exceed 200 characters"),

    body("education.*.startDate")
        .optional({ nullable: true, checkFalsy: true })
        .isISO8601()
        .withMessage("Invalid education start date"),

    body("education.*.endDate")
        .optional({ nullable: true, checkFalsy: true })
        .isISO8601()
        .withMessage("Invalid education end date"),

    body("education.*.description")
        .optional()
        .isString()
        .withMessage("Education description must be a string")
        .bail()
        .trim()
        .isLength({ max: 2000 })
        .withMessage("Education description cannot exceed 2000 characters"),

    // Experience
    body("experience")
        .optional()
        .isArray({ max: 50 })
        .withMessage("Experience must be an array with at most 50 items"),

    body("experience.*.company")
        .if(body("experience.*").exists())
        .isString()
        .withMessage("Company must be a string")
        .bail()
        .trim()
        .notEmpty()
        .withMessage("Company is required")
        .bail()
        .isLength({ max: 200 })
        .withMessage("Company cannot exceed 200 characters"),

    body("experience.*.position")
        .if(body("experience.*").exists())
        .isString()
        .withMessage("Position must be a string")
        .bail()
        .trim()
        .notEmpty()
        .withMessage("Position is required")
        .bail()
        .isLength({ max: 150 })
        .withMessage("Position cannot exceed 150 characters"),

    body("experience.*.startDate")
        .optional({ nullable: true, checkFalsy: true })
        .isISO8601()
        .withMessage("Invalid experience start date"),

    body("experience.*.endDate")
        .optional({ nullable: true, checkFalsy: true })
        .isISO8601()
        .withMessage("Invalid experience end date"),

    body("experience.*.currentlyWorking")
        .optional()
        .isBoolean()
        .withMessage("currentlyWorking must be a boolean"),

    body("experience.*.description")
        .optional()
        .isString()
        .withMessage("Experience description must be a string")
        .bail()
        .trim()
        .isLength({ max: 4000 })
        .withMessage("Experience description cannot exceed 4000 characters"),

    body("projects")
        .optional()
        .isArray({ max: 50 })
        .withMessage("Projects must be an array with at most 50 items"),

    body("projects.*.title")
        .if(body("projects.*").exists())
        .isString()
        .withMessage("Project title must be a string")
        .bail()
        .trim()
        .notEmpty()
        .withMessage("Project title is required")
        .bail()
        .isLength({ max: 150 })
        .withMessage("Project title cannot exceed 150 characters"),

    body("projects.*.description")
        .optional()
        .isString()
        .withMessage("Project description must be a string")
        .bail()
        .trim()
        .isLength({ max: 3000 })
        .withMessage("Project description cannot exceed 3000 characters"),

    body("projects.*.technologies")
        .optional()
        .isArray({ max: 50 })
        .withMessage("Technologies must be an array with at most 50 items"),

    body("projects.*.technologies.*")
        .optional()
        .isString()
        .withMessage("Each technology must be a string")
        .bail()
        .trim()
        .notEmpty()
        .withMessage("Technology cannot be empty")
        .bail()
        .isLength({ max: 100 })
        .withMessage("Technology cannot exceed 100 characters"),

    body(["projects.*.githubUrl", "projects.*.liveUrl"])
        .optional()
        .isURL({ protocols: ["https"], require_protocol: true })
        .withMessage("Project links must be valid HTTPS URLs"),

    body("certifications")
        .optional()
        .isArray({ max: 50 })
        .withMessage("Certifications must be an array with at most 50 items"),

    body("certifications.*.name")
        .if(body("certifications.*").exists())
        .isString()
        .withMessage("Certification name must be a string")
        .bail()
        .trim()
        .notEmpty()
        .withMessage("Certification name is required")
        .bail()
        .isLength({ max: 200 })
        .withMessage("Certification name cannot exceed 200 characters"),

    body("certifications.*.organization")
        .optional()
        .isString()
        .withMessage("Organization must be a string")
        .bail()
        .trim()
        .isLength({ max: 200 })
        .withMessage("Organization cannot exceed 200 characters"),

    body("certifications.*.issueDate")
        .optional({ nullable: true, checkFalsy: true })
        .isISO8601()
        .withMessage("Invalid certification issue date"),

    body("certifications.*.credentialUrl")
        .optional()
        .isURL({ protocols: ["https"], require_protocol: true })
        .withMessage("Credential URL must be a valid HTTPS URL"),

    body("achievements")
        .optional()
        .isArray({ max: 100 })
        .withMessage("Achievements must be an array with at most 100 items"),

    body("achievements.*")
        .optional()
        .isString()
        .withMessage("Each achievement must be a string")
        .bail()
        .trim()
        .notEmpty()
        .withMessage("Achievement cannot be empty")
        .bail()
        .isLength({ max: 1000 })
        .withMessage("Achievement cannot exceed 1000 characters"),

    body("template")
        .optional()
        .isIn(["modern", "professional", "minimal", "creative"])
        .withMessage("Invalid resume template"),

    body("targetJobRole")
        .optional()
        .isString()
        .withMessage("Target job role must be a string")
        .bail()
        .trim()
        .isLength({ max: 150 })
        .withMessage("Target job role cannot exceed 150 characters"),

    body("targetJobDescription")
        .optional()
        .isString()
        .withMessage("Target job description must be a string")
        .bail()
        .trim()
        .isLength({ max: 10000 })
        .withMessage("Target job description cannot exceed 10000 characters"),

    body("status")
        .optional()
        .isIn(["draft", "completed"])
        .withMessage("Invalid resume status"),

    body("visibility")
        .optional()
        .isIn(["private", "public"])
        .withMessage("Invalid resume visibility"),
]