import { Request, Response } from "express"
import authService from "../services/authService"

function signup(req: Request & { body: Body}, res: Response)  {
    const body = req.body

   const resService =  authService.signup(body)

   res.send(resService)
} 

export default { signup }