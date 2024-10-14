import Joi from 'joi';

export const meteorSchema = Joi.object({
  startDate: Joi.date().iso().required().messages({
    'any.required': 'startDate is required',
    'date.base': 'startDate must be a valid ISO date',
  }),
  endDate: Joi.date().iso().required().messages({
    'any.required': 'endDate is required',
    'date.base': 'endDate must be a valid ISO date',
  }),
  count: Joi.boolean().optional().messages({
    'boolean.base': 'count must be a boolean value',
  }),
  wereDangerousMeteors: Joi.boolean().optional().messages({
    'boolean.base': 'wereDangerousMeteors must be a boolean value',
  }),
});
