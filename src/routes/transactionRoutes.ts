import { Router } from "express"
import transactionController from "../controllers/transactionController"
import { authMiddleware } from "../middlewares/authMiddlewares"
import { validateSchemaMiddleware } from "../middlewares/validationSchemaMiddleware"
import { CreateTransaction } from "../schemas/validation/CreateTransaction"
import { UpdateUser } from "../schemas/validation/UpdateUser"

const transactionRouter: Router = Router()

transactionRouter.use(authMiddleware)

transactionRouter.post('/transactions',  validateSchemaMiddleware(CreateTransaction),transactionController.create)
transactionRouter.get('/transactions', transactionController.findAllByUser)
transactionRouter.patch('/transactions/:id', validateSchemaMiddleware(UpdateUser), transactionController.findUpdateUser)
transactionRouter.delete('/transactions/:id', transactionController.findByAndDelete)

export default transactionRouter