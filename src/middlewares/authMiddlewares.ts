import { NextFunction, Request, Response, request } from "express";

// authMiddlewares.ts
export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    console.log("Authorization Header:", authorization);

    next();
}
