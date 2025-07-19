import { StatusCodes } from "http-status-codes";
export class serviceErrorHandler extends Error {
  constructor(
    name = 'Service-Error',
    statusCode = StatusCodes.INTERNAL_SERVER_ERROR,
    message = "Something went wrong !",
    description = "Service layer is crashing !"
  ) {
    super();
    this.name = name;
    this.statusCode = statusCode;
    this.message = message;
    this.description = description;
  }
}
