import { Router } from "express"
import transactionController from "../controllers/transactionController"
import { authMiddlewares } from "../middlewares/authMiddlewares"

const transactionRouter = Router()

transactionRouter.post('/transactions', authMiddlewares, transactionController.create)

export default transactionRouter