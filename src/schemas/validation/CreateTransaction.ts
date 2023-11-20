import Joi from "joi";

interface User {
    value: number
    description: string
    type: string
    userId: string
    createdAt: string
}

export const CreateTransaction: Joi.ObjectSchema<User>  = Joi.object({
    value: Joi.number().required(),
    description: Joi.string().required().min(3),
    type: Joi.string().required().valid("input", "output"),
    userId: Joi.string(),
    createdAt: Joi.string()
})