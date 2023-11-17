import { Schema, model } from "mongoose";

interface Transaction {
    userId: Schema.Types.ObjectId
    value: Number
    description: String
    type: String
    created_at: Date
}

const Transaction = new Schema<Transaction>({
    value: { type: Number, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, require: true, ref: "users" },
    created_at: { type: Date, default: Date.now() },
})

export default model("transactions", Transaction)