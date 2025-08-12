//Generic issue
export class AppError extends Error {
  constructor(name, message, statusCode, description) {
    super();
    this.name = name;
    this.message = message;
    this.statusCode = statusCode;
    this.description = description;
  }
}
