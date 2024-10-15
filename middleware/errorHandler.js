const errorHandler = (error, req, res, next) => {
  console.error(error)

  const { code, message } = error

  res.status(code).json({
    error: {
      code,
      message
    }
  })
}

export default errorHandler
