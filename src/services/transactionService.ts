import transactionRepository from "../repositories/transactionRepository"

interface RequestBody {
    body: Body
    name: string
    email: string
    password: string
}


async function create(body: RequestBody, id: string) {
    if (!id) throw new Error("User id is requires")

    return await transactionRepository.create({ ...body, userId: id  })
}

export default { create }