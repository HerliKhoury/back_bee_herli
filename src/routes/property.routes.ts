import { Router } from "express";
import { 
    createPropertyController, 
    deletePropertyController, 
    listPropertiesController, 
    updatePropertyController 
} from "../controllers/property.controllers";
import { ensureTokenIsValid } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureBodyIsValid } from "../middlewares/ensureBodyIsValid.middleware";
import { propertySchema, propertySchemaPartial } from "../schemas/propery.schemas";

export const propertyRoutes: Router = Router();

propertyRoutes.post(
    "", 
    ensureTokenIsValid,
    ensureBodyIsValid(propertySchema), 
    createPropertyController
);

propertyRoutes.get(
    "",
    ensureTokenIsValid, 
    listPropertiesController
);

propertyRoutes.patch(
    "/:id", 
    ensureTokenIsValid, 
    ensureBodyIsValid(propertySchemaPartial),
    updatePropertyController
);

propertyRoutes.delete(
    "/:id", 
    ensureTokenIsValid, 
    deletePropertyController
);