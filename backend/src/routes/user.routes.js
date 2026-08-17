import express from "express";
import userController from "../controller/user.controller.js";
const router = express.Router();

const userControllers = new userController()
router.post("/register", userControllers.register.bind(userControllers))

export default router;