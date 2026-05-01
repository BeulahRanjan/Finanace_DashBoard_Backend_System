import { AppError } from "../errors/AppError.js";
import winston from "winston";

const LogErrors = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/app_error.log" }),
  ],
});

class ErrorLogger {
  async logError(err) {
    console.log("=========== Start Error Logger ===========");

    LogErrors.log({
      private: true,
      level: "error",
      message: `${new Date()} - ${err.message}`,
      stack: err.stack,
    });

    console.log("=========== End Error Logger ===========");

    return false;
  }

  isTrustError(error) {
    if (error instanceof AppError) {
      return error.isOperational;
    } else {
      return false;
    }
  }
}

const errorHandler = async (err, req, res, next) => {
  const errorLogger = new ErrorLogger();

  if (err) {
    await errorLogger.logError(err);

    // Operational errors (expected errors)
    if (errorLogger.isTrustError(err)) {
      return res.status(err.statusCode).json({
        success: false,
        message: err.message,
      });
    }

    // Non-operational errors (unexpected bugs)
    return res.status(err.statusCode || 500).json({
      success: false,
      error: { message: err.message },
    });
  }
};

export default errorHandler;