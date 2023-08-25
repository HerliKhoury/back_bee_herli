import { Router } from "express";
import { createUserController } from "../controllers/user.controllers";
import { userReqSchema } from "../schemas/user.schemas";
import { ensureBodyIsValid } from "../middlewares/ensureBodyIsValid.middleware";

export const userRoutes: Router = Router();

userRoutes.post(
    "", 
    ensureBodyIsValid(userReqSchema), 
    createUserController
);