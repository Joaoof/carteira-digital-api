import User from "../schemas/User"

async function create(data: object) {
    return await User.create(data)
}

async function findByEmail(email: string){
    const user = await User.findOne({ email })

    return user
}

export default { create, findByEmail }