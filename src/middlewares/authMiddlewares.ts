import { NextFunction, Request, Response, request } from "express";
import  jwt from "jsonwebtoken";
import "dotenv/config"
import authRepository from "../repositories/authRepository";
import User from "../schemas/User";
import { Types } from "mongoose";

// authMiddlewares.ts
export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if(!authorization) return res.status(401).send({ message: "Invalid token" })

    const parts: Array<string> = authorization?.split(" ")
    if (parts.length !== 2) return res.status(401).send({ message: "Invalid token" }) // caso não tenha o "Bearer" seguido do <token>, será inválido

    const [ schema, token ]: Array<string> = parts

    if(!/^Bearer$/i.test(schema)) return res.status(401).send({ message: "Invalid token" })  // se estiver escrito: beare já n vai, pois o correto é Bearer

    const secret: string | undefined = process.env.SECRET

    interface User { id: string; /* outras propriedades do usuário */ }

// Defina um tipo intermediário para o resultado do repositório
    interface UserDocument extends User { _id: Types.ObjectId, }    


    jwt.verify(token,`${secret}`, async (err, decode: string | jwt.JwtPayload | undefined) => {
        if (err) return res.status(401).send({ message: "Invalid token" })
        if (!decode) return res.status(401).send({ message: "Invalid token" })

        if (!decode || typeof decode === 'string') {
            return res.status(401).send({ message: "Invalid token" });
          }

        const user = (await authRepository.findById(decode.id))?.toObject() as UserDocument | null;

        if(!user) return res.status(401).send({ message: "Invalid token" })

        res.locals.user = user

        next();
    })

}
