import { Router } from "express";

export const propertyRoutes: Router = Router();

propertyRoutes.post("");
propertyRoutes.get("");
propertyRoutes.patch("/:id");
propertyRoutes.delete("/:id");