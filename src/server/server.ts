import express, { json } from "express"
import authRoutes from "../routes/authRoutes"
import { connectDb } from "../config/database"
import transactionRouter from "../routes/transactionRoutes"

const app = express()

connectDb()
app.use(json())
app.use(authRoutes) // usa a rota de autenticação, pense na lógica da seguinte forma: routes -> server 
app.use(transactionRouter)


const port = process.env.PORT

app.listen(port, () => console.log(`Server listening in port ${port}`))