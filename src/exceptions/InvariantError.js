const ClientError = require("./ClientError");

class InvariantError extends ClientError {
  constructor(message) {
    super(message);
    this.name = "InvariantError";
    // Karena invariantError memiliki status code 400
    // maka tidak perlu menetapkan statusCode disini
  }
}

module.exports = InvariantError;
