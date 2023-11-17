import Transaction from "../schemas/Transaction";

async function create(data: Object) {
    return Transaction.create(data)
}

export default { create }