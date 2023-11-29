const { StatusCodes } = require('http-status-codes');

const ConflictError = (message) => {
  let error = new Error(message);
  error.stack = error.stack;
  error.name = 'Conflict';
  error.statusCodes = StatusCodes.CONFLICT;
  return error;
};
const NotFoundError = (message) => {
  let error = new Error(message);
  error.stack = error.stack;
  error.statusCodes = StatusCodes.NOT_FOUND;
  return error;
};

const BadRequestError = (message) => {
  let error = new Error(message);
  error.stack = error.stack;
  error.statusCodes = StatusCodes.BAD_REQUEST;
  return error;
};

const UnauthenticatedError = (message) => {
  let error = new Error(message);
  error.stack = error.stack;
  error.statusCodes = StatusCodes.UNAUTHORIZED;
  return error;
};

const Unauthorized = (message) => {
  let error = new Error(message);
  error.stack = error.stack;
  error.statusCodes = StatusCodes.FORBIDDEN;
  return error;
};
module.exports = {
  ConflictError,
  NotFoundError,
  UnauthenticatedError,
  Unauthorized,
  BadRequestError,
};
