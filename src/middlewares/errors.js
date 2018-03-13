const errorsMiddleware = (err, req, res, next) => {
  if (err.name === 'SequelizeDatabaseError') {
    return res.status(422).json({
      result: null,
      errors: `SequelizeDatabaseError: ${err.message}`
    });
  }

  res.status(500);
  next(err);
};

module.exports = errorsMiddleware;
