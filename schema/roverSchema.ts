import Joi from 'joi'

export const roverSchema = Joi.object({
  userId: Joi.string().required(),
  userName: Joi.string().required(),
  apiKey: Joi.string().required().messages({
    'any.required': 'API key is required',
    'string.base': 'API key must be a valid string'
  })
})
