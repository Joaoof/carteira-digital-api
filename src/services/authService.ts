import bcrypt from 'bcrypt'
import authRepository from '../repositories/authRepository'


function signup(body: { body: Body, password: string }) {
    const hasPassword = bcrypt.hashSync(body.password, 10)

     return authRepository.create({ ...body, password: hasPassword })
}


export default {
    signup
}