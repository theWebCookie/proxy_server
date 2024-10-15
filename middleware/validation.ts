import { Schema } from 'joi'
import Exception from '../utils/exception.ts'
import { Request, Response, NextFunction } from 'express'

export const validate = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req.method === 'GET' ? req.query : req.body
    const { error } = schema.validate(data, { abortEarly: true })

    if (error) {
      next(
        new Exception(
          400,
          `Validation error: ${error.details.map((detial) => detial.message)}`
        )
      )
    }

    next()
  }
}
