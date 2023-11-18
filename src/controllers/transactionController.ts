import transactionService from "../services/transactionService"
import { Response, Request } from "express"

interface BodyRequest {
    body: Body
    name: string
    email: string
    password: string
}


async function create(req: Request, res: Response) {
    const body: BodyRequest = await req.body
    const id: string = "6557523e6bee9f05c7d774ab"

    try {
            const transaction = await transactionService.create(body, id)
            return res.status(201).send(transaction)
    } catch (error) {
        return res.status(409).send((error as Error).message)
    }
}

export default { create }