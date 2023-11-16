import express, { json } from "express"
import authRoutes from "./routes/authRoutes"
import { connectDb } from "./config/database"

const app = express()

connectDb()
app.use(json())

app.use(authRoutes) // usa a rota de autenticação, pense na lógica da seguinte forma: routes -> server 

const port = process.env.PORT

app.listen(port, () => console.log(`Server listening in port ${port}`))