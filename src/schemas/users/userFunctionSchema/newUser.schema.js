//MÓDULO DE VALIDACION DE REGISTRO

//Importamos joi (validacion y errores personalizados)
import joi from 'joi';
import * as joiMsg from '../../joi.error.messages.js';

const newUserSchema = joi.object({
    email: joi.string().required().email().messages(...joiMsg.errorMsg),
    userName: joi.string().min(3).max(30).required().messages({...joiMsg.errorMsg, ...joiMsg.errorMsgUsername}),
    password: joi.string().required().messages({...joiMsg.errorMsg, ...joiMsg.errorMsgPassword})
});

export default newUserSchema