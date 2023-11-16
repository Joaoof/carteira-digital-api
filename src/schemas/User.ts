import { InferSchemaType, Schema, model } from "mongoose"

interface User {
    name: string,
    email: string,
    password: string,
    createdAt: Date
}

const UserSchema = new Schema<User>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now() }
})


export default model("users", UserSchema)
