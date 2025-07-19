import { StatusCodes } from "http-status-codes";
export class validationErrorHandler extends Error {
  constructor(description = [], statusCode = StatusCodes.BAD_REQUEST) {
    super();
    this.name = "Validation error";
    this.message = "Request data is invalid !";
    this.statusCode = statusCode;
    this.description = description;
  }
}
