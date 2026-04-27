const STATUS_CODES ={
    OK: 200,
    BAD_REQUEST:400,
    UN_AUTHORISED:404,
    INTERNAL_ERROR:500,
    FORBIDDEN_ERROR:403
};


export default class AppError extends Error {
  constructor(
    name,
    statusCode,
    description,
    isOperational = true,
    logError
  ) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype);

    this.name = name;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.logError = logError;

    Error.captureStackTrace(this);
  }
}

export class InternalServerError extends AppError {
  constructor(logError) {
    super(
      "API_ERROR",
      STATUS_CODES.INTERNAL_ERROR,
      "Internal Server Error",
      true,
      logError
    );
  }
}

// 404 — Not Found
export class NotFoundError extends AppError {
  constructor(description, logError) {
    super(
      "NOT_FOUND_ERROR",
      STATUS_CODES.NOT_FOUND,
      description,
      true,
      logError
    );
  }
}

// 400 — Bad Request
export class BadRequestError extends AppError {
  constructor(description, logError) {
    super(
      "BAD_REQUEST",
      STATUS_CODES.BAD_REQUEST,
      description,
      true,
      logError
    );
  }
}

// 401 — Unauthorized
export class UnauthorizedError extends AppError {
  constructor(description, logError) {
    super(
      "UN_AUTHORIZED_ERROR",
      STATUS_CODES.UN_AUTHORISED,
      description,
      true,
      logError
    );
  }
}

// 403 — Forbidden
export class ForbiddenError extends AppError {
  constructor(description, logError) {
    super(
      "FORBIDDEN_ERROR",
      STATUS_CODES.FORBIDDEN, // ⚠️ fixed (you had UN_AUTHORISED here)
      description,
      true,
      logError
    );
  }
}

// 400 — Validation Error
export class ValidationError extends AppError {
  constructor(description, logError) {
    super(
      "VALIDATION_ERROR",
      STATUS_CODES.BAD_REQUEST,
      description,
      true,
      logError
    );
  }
}