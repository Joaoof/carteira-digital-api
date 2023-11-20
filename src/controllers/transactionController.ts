import mongoose, {  ObjectId, Types } from "mongoose"
import transactionService from "../services/transactionService"
import { Response, Request } from "express"

interface BodyRequest {
    body: Body
    name: string
    email: string
    password: string
}

interface User {
    _id: Types.ObjectId;
    // outras propriedades...
}




async function create(req: Request, res: Response) {
    const body: BodyRequest = await req.body
    const { _id: id }: User = res.locals.user

    try {
        const transaction = await transactionService.create(body, id)
        return res.status(201).send(transaction)
    } catch (error) {
        return res.status(409).send((error as Error).message)
    }
}

async function findAllByUser(req: Request, res: Response) {
    const { _id: id }: User = res.locals.user

    try {
        const transactions = await transactionService.findAllByUser(id)
        return res.status(201).send(transactions)
    } catch (error) {
        return res.status(500).send((error as Error).message)
    }
}

async function findUpdateUser(req: Request, res: Response) {
    const { id } = req.params
    const { value, description, type } = req.body
    const user = await transactionService.findUpdateUser(new mongoose.Types.ObjectId(id), value, description, type) // converto o id que antes era uma string para um Object.id

    if (!Types.ObjectId.isValid(id)) {
        return res.status(400).send('Invalid ObjectId');
    }

    return res.json(user)
}

async function findByAndDelete(req: Request, res: Response) {
    const { id } = req.params
    const user = await transactionService.findByAndDelete((new mongoose.Types.ObjectId(id)))

    return res.json(user)
}
export default { create, findAllByUser, findUpdateUser, findByAndDelete }