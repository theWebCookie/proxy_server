import { Request, Response, NextFunction } from 'express'
import Exception from '../utils/exception.ts'

const errorHandler = (
  error: Exception,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(error)

  const { code, message } = error

  const statusCode = code || 500

  res.status(code).json({
    error: {
      code: statusCode,
      message
    }
  })
}

export default errorHandler
