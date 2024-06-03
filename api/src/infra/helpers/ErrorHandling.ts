import { Request, Response, NextFunction } from "express";
import { BusinessError, NotFoundError, UnauthorizedError } from "./Errors";
import { HttpStatusCode } from "./HttpStatusCode";

export const errorHandling = (
	error: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	let statusCode = HttpStatusCode.OK;

	if (error instanceof NotFoundError) statusCode = HttpStatusCode.NOT_FOUND;
	if (error instanceof UnauthorizedError)
		statusCode = HttpStatusCode.UNAUTHORIZED;
	if (error instanceof BusinessError)
		statusCode = HttpStatusCode.UNPROCESSABLE_ENTITY;

	return res.status(statusCode).json(responseErrorFormatter(error));
};

function responseErrorFormatter(error: Error) {
	return {
		name: error.name,
		message: error.message
	};
}
