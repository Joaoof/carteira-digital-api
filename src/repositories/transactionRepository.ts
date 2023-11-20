import { Types } from "mongoose";
import Transaction from "../schemas/Transaction";

async function create(data: Object) {
    return await Transaction.create(data)
}

async function findAllByUser(id: Types.ObjectId) {
    return await Transaction.find({ userId: id})
}

export default { create, findAllByUser }