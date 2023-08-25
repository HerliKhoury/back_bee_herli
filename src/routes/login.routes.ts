import { Router } from "express";
import { createTokenController } from "../controllers/login.controllers";
import { loginRequestSchema } from "../schemas/login.schemas";
import { ensureBodyIsValid } from "../middlewares/ensureBodyIsValid.middleware";

export const loginRoutes: Router = Router();

loginRoutes.post(
    "", 
    ensureBodyIsValid(loginRequestSchema), 
    createTokenController
);