import Transaction from "../schemas/Transaction";

async function create(data: Object) {
    return await Transaction.create(data)
}

export default { create }