import { Types } from "mongoose"
import User from "../schemas/User"
import jwt from 'jsonwebtoken'
import "dotenv/config"


const sha256 = process.env.SECRET

async function create(data: Object) {
    return await User.create(data)
}

async function findByEmail(email: string) {
    const user = await User.findOne({ email })

    return user
}

async function generateToken(id: Types.ObjectId) {
    return jwt.sign({ id }, `${sha256}`, { expiresIn: 86400 })
}

export default { create, findByEmail, generateToken }