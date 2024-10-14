import Joi from 'joi';

export const roverSchema = Joi.object({
  sol: Joi.number().integer().positive().required().messages({
    'any.required': 'sol is required',
    'number.base': 'sol must be a valid number',
    'number.positive': 'sol must be a positive number',
  }),
  apiKey: Joi.string().required().messages({
    'any.required': 'API key is required',
    'string.base': 'API key must be a valid string',
  }),
});
