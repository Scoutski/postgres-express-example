const errorsMiddleware = (err, req, res, next) => {
  if (err.name === 'SequelizeDatabaseError') {
    return res.status(422).json({
      result: null,
      errors: `SequelizeDatabaseError: ${err.message}`
    });
  } else if (err) {
    return res.status(500).json({
      result: null,
      errors: `Unspecified Error occurred: ${err.message}`
    });
  }

  next(err);
};

module.exports = errorsMiddleware;
