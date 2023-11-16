import mongoose, { Error } from "mongoose";
import "dotenv/config"

export async function connectDb(): Promise<void> {
    try {
        await mongoose.connect(process.env.DB_URL || '')
        console.log('Mongo Db connectado com sucesso')
    } catch (err) {
        console.log((err as Error).message) 
    }
}

export async function disconnectDb(): Promise<void> {
    await mongoose.disconnect()
}