import Joi from "joi";

const carValidation = Joi.object({
    brand: Joi.string().required().min(1).max(20).pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/),
    price: Joi.number().required().min(0).max(1000000),
    year: Joi.number().required().min(1990).max(new Date().getFullYear())
})

export {carValidation}