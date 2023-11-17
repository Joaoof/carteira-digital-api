import { NextFunction, Request, Response } from "express"

export async function authMiddlewares(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if(!authorization) {
        res.status(404).send('Undefined')
    }

    next()
}


