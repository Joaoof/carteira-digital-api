import { Types } from "mongoose"
import transactionRepository from "../repositories/transactionRepository"

interface RequestBody {
    body: Body
    name: string
    email: string
    password: string
}


interface Transaction {
    value: string
    description: string
    type: string 
}


async function create(body: RequestBody, id: Types.ObjectId) {
    if (!id) throw new Error("User id is requires")

    return await transactionRepository.create({ ...body, userId: id })
}

async function findAllByUser(id: Types.ObjectId) {
    return await transactionRepository.findAllByUser(id)
}

async function findUpdateUser(id: Types.ObjectId, value: string, description: string, type: string): Promise<Transaction> {
    return await transactionRepository.findByIdAndUpdate(id, value, description, type)
}

async function findByAndDelete(id: Types.ObjectId): Promise<Transaction> {
    return await transactionRepository.findByAndDelete(id)
}

export default { create, findAllByUser, findUpdateUser, findByAndDelete }