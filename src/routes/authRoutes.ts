import { Router } from "express";
import authController from "../controllers/authController";
import { authMiddleware } from "../middlewares/authMiddlewares";
import { validateSchemaMiddleware } from "../middlewares/validationSchemaMiddleware";
import { CreateUser } from "../schemas/validation/CreateUser";
import { AuthUser } from "../schemas/validation/AuthUser";

const authRoutes: Router = Router()

authRoutes.post('/signup', validateSchemaMiddleware(CreateUser), authController.signup)
authRoutes.post('/signin', validateSchemaMiddleware(AuthUser),authController.signin)
authRoutes.get("/me", authMiddleware, authController.userLogged)

export default authRoutes