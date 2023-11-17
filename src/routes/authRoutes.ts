import { Router } from "express";
import authController from "../controllers/authController";

const authRoutes: Router = Router()

authRoutes.post('/signup', authController.signup)
authRoutes.post('/signin', authController.signin)

export default authRoutes