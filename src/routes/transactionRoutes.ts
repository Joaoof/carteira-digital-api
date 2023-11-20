import { Router } from "express"
import transactionController from "../controllers/transactionController"
import { authMiddleware } from "../middlewares/authMiddlewares"

const transactionRouter: Router = Router()

transactionRouter.use(authMiddleware)

transactionRouter.post('/transactions',  transactionController.create)
transactionRouter.get('/transactions', transactionController.findAllByUser)

export default transactionRouter