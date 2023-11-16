import mongoose, { Error } from "mongoose";

export async function connectDb(): Promise<void> {
    const mongoUrl: string = "mongodb+srv://admin:admin@api-express.iqrsv3x.mongodb.net/?retryWrites=true&w=majority"

    try {
        await mongoose.connect(mongoUrl)
        console.log('Mongo Db connectado com sucesso')
    } catch (err) {
        console.log((err as Error).message) 
    }
}

export async function disconnectDb(): Promise<void> {
    await mongoose.disconnect()
}