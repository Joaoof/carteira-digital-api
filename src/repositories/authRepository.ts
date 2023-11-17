import User from "../schemas/User"

function create(data: object) {
    return data
}

async function findByEmail(email: string){
    const user = await User.findOne({ email })

    return user
}

export default { create, findByEmail }