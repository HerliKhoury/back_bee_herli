import { Router } from "express";
import { createPropertyController, listPropertiesController } from "../controllers/property.controllers";

export const propertyRoutes: Router = Router();

propertyRoutes.post("", createPropertyController);
propertyRoutes.get("", listPropertiesController);
propertyRoutes.patch("/:id");
propertyRoutes.delete("/:id");