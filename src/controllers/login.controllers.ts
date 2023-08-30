import { Request, Response } from "express";
import { TLoginRequest, TLoginRes } from "../interfaces/login.interfaces";
import { createSessionService } from "../services/login/createSession.service";

export const createTokenController = async (
    req: Request,
    res: Response
): Promise<Response<any, Record<string, any>>> => {
    const loginData: TLoginRequest = req.body;

    const response: TLoginRes = await createSessionService(loginData);

    return res.status(200).json(response);
}