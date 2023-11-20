import Joi from "joi";

interface User {
    name: string
    email: string
    password: string
    createdAt: string
}

export const UpdateUser: Joi.ObjectSchema<User>  = Joi.object({
    name: Joi.string().required().min(3),
    email: Joi.string().email().required().min(3),
    password: Joi.string().required().min(3),
    createdAt: Joi.string()
})