import { Router } from "express";
import { 
    createPropertyController, 
    deletePropertyController, 
    listPropertiesController, 
    updatePropertyController 
} from "../controllers/property.controllers";

export const propertyRoutes: Router = Router();

propertyRoutes.post("", createPropertyController);
propertyRoutes.get("", listPropertiesController);
propertyRoutes.patch("/:id", updatePropertyController);
propertyRoutes.delete("/:id", deletePropertyController);