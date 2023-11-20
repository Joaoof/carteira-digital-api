import { NextFunction } from "express";
import { Request, Response } from "express";
import { Schema } from "joi";

  export function validateSchemaMiddleware(schema: Schema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body, { abortEarly: false })
        if(error) {
            const erros = error.details.map(detail => detail.message)
            return res.status(422).send(erros)
        }

        next()
    }
  }