import { Router } from "express"
import transactionController from "../controllers/transactionController"
import { authMiddleware } from "../middlewares/authMiddlewares"

const transactionRouter: Router = Router()

transactionRouter.post('/transactions', authMiddleware, transactionController.create)

export default transactionRouter