//Generic issue
class AppError {
  constructor(
    name,
    message,
    statusCode ,
    description,
  ) {
    super();
    this.name = name;
    this.message = message;
    this.statusCode = statusCode;
    this.description = description;
  }
}
