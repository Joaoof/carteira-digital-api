import { Router } from "express"
import transactionController from "../controllers/transactionController"
import { authMiddleware } from "../middlewares/authMiddlewares"
import { validateSchemaMiddleware } from "../middlewares/validationSchemaMiddleware"
import { CreateTransaction } from "../schemas/validation/CreateTransaction"

const transactionRouter: Router = Router()

transactionRouter.use(authMiddleware)

transactionRouter.post('/transactions',  validateSchemaMiddleware(CreateTransaction),transactionController.create)
transactionRouter.get('/transactions', transactionController.findAllByUser)

export default transactionRouter