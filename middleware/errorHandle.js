const { StatusCodes } = require('http-status-codes');
require('dotenv').config();
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = err.message || 'Something went wrong, please try later';
  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : {},
  });
};

module.exports = { errorHandler };
