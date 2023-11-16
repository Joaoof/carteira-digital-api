import { Router } from "express";
import authController from "../controllers/authController";

const authRoutes: Router = Router()

authRoutes.post('/signup', authController.signup)

export default authRoutes