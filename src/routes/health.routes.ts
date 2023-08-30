import { Router } from "express";
import { healthController } from "../controllers/login.controllers";

export const healthRoutes: Router = Router();

healthRoutes.get("", healthController);