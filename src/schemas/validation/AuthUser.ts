import Joi from "joi";

interface User {
    email: string
    password: string
}


export const AuthUser: Joi.ObjectSchema<User>  = Joi.object({
    email: Joi.string().email().required().min(3),
    password: Joi.string().required().min(3)
})