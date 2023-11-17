import bcrypt from 'bcrypt'
import authRepository from '../repositories/authRepository'


async function signup(body: { body: Body, password: string, email: string }) {
    const hasPassword = bcrypt.hashSync(body.password, 10)

    const userExists = await authRepository.findByEmail(body.email)
    if (userExists) throw new Error("User already Exists")

    return authRepository.create({ ...body, password: hasPassword })
}


export default {
    signup
}