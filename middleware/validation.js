export const validate = (schema) => {
  return (req, res, next) => {
    const data = req.method === 'GET' ? req.query : req.body;
    const { error } = schema.validate(data, { abortEarly: true });

    if (error) {
      return res.status(400).json({
        status: 'Fail',
        message: 'Validation error',
        details: error.details.map((detial) => detial.message),
      });
    }

    next();
  };
};
