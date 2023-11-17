import { Request, Response } from "express"
import authService from "../services/authService"

async function signup(req: Request & { body: Body}, res: Response)  {
    const body = req.body

   const resService = await authService.signup(body)

   res.send(resService)
} 

export default { signup }