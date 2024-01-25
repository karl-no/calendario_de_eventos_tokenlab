import BaseHttpError from './BaseHttpError';

export default class BadRequestError extends BaseHttpError {
  constructor(message) {
    super(message, 400);
  }
}
