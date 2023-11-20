import { Types } from "mongoose"
import transactionRepository from "../repositories/transactionRepository"

interface RequestBody {
    body: Body
    name: string
    email: string
    password: string
}


async function create(body: RequestBody, id: Types.ObjectId) {
    if (!id) throw new Error("User id is requires")

    return await transactionRepository.create({ ...body, userId: id })
}

async function findAllByUser(id: Types.ObjectId) {
    return await transactionRepository.findAllByUser(id)
}

export default { create, findAllByUser }