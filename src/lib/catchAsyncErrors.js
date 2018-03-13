// This function should wrap any routes that use
// async/await. In the error that an awaited call
// fails, it will catch the error and pass it to
// the errors middleware.
function catchAsyncErrors(fn) {
  return (req, res, next) => {
    const routePromise = fn(req, res, next);
    if (routePromise.catch) {
      routePromise.catch(err => next(err));
    }
  };
}

module.exports = catchAsyncErrors;
