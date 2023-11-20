import { Router } from "express";
import authController from "../controllers/authController";
import { authMiddleware } from "../middlewares/authMiddlewares";

const authRoutes: Router = Router()

authRoutes.post('/signup', authController.signup)
authRoutes.post('/signin', authController.signin)
authRoutes.get("/me", authMiddleware, authController.userLogged)

export default authRoutes