import { Types } from "mongoose";
import Transaction from "../schemas/Transaction";

async function create(data: Object) {
    return await Transaction.create(data)
}

async function findAllByUser(id: Types.ObjectId) {
    return await Transaction.find({ userId: id})
}

async function findByIdAndUpdate(id: Types.ObjectId, value: string, description: string, type: string): Promise<any> {
    return await Transaction.findByIdAndUpdate(id, { value, description, type })
}


async function findByAndDelete(id: Types.ObjectId): Promise<any> {
    return await Transaction.findByIdAndDelete(id)
}

export default { create, findAllByUser, findByIdAndUpdate, findByAndDelete }