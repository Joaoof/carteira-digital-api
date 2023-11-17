import { Request, Response } from "express"
import authService from "../services/authService"

interface RequestBody {
    body: Body
    name: string
    email: string
    password: string
}

async function signup(req: Request, res: Response) {
    const body: RequestBody = req.body

    try {
        const resService = await authService.signup(body)
        return res.status(201).send(resService)
    } catch (error) {
        return res.status(409).send((error as Error).message)

    }
}

async function signin(req: Request, res: Response) {
    const body: RequestBody = req.body

    try {
        const token = await authService.signin(body)
        return res.send(token)
    } catch (error) {
        return res.status(401).send((error as Error).message)
    }
}

export default { signup, signin }