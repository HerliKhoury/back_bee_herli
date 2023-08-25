import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { MyError } from "../errors/myError.error";



export const ensureTokenIsValid = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    let token = req.headers.authorization;

    if(!token){
        throw new MyError("Faltando Token", 401);
    };

    token = token.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY!, (err: any, decoded: any) => {
        if(err){
            throw new MyError(err.message, 401);
        }
        res.locals.userEmail = decoded.userEmail;
        res.locals.userId = Number(decoded.sub);
    });

    return next();
};