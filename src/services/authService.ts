import bcrypt from 'bcrypt'
import authRepository from '../repositories/authRepository'

interface RequestBody {
    body: Body
    name: string
    email: string
    password: string
}

async function signup(body: { body: Body, password: string, email: string }) {
    const hasPassword = bcrypt.hashSync(body.password, 10)

    const userExists = await authRepository.findByEmail(body.email)
    if (userExists) throw new Error("User already Exists")

    return await authRepository.create({ ...body, password: hasPassword })
}

async function signin(body: RequestBody) {
    const userExists = await authRepository.findByEmail(body.email)
    if (!userExists) throw new Error("Email or password incorrect")
    
    const passwordOk = bcrypt.compareSync(body.password, userExists?.password || '')
    if (!passwordOk) throw new Error("Email or password incorrect")


    return authRepository.generateToken(userExists._id)
}


export default {
    signup,
    signin
}