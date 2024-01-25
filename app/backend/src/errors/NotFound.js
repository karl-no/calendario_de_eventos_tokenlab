import BaseHttpError from './BaseHttpError';

export default class NotFound extends BaseHttpError {
  constructor(message) {
    super(message, 404);
  }
}
