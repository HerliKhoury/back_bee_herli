import { Router } from "express";
import { createUserController } from "../controllers/user.controllers";

export const userRoutes: Router = Router();

userRoutes.post("", createUserController);