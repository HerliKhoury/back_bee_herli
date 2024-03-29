import { Request, Response } from "express";
import { 
    TProperty, 
    TPropertyReq, 
    TPropertyRes, 
    TPropertyUpdate 
} from "../interfaces/property.interfaces";
import { createPropertyService } from "../services/property/createProperty.service";
import { listPropertiesService } from "../services/property/listProperties.service";
import { deletePropertyService } from "../services/property/deleteProperty.service";
import { updatePropertyService } from "../services/property/updateProperty.service";

export const createPropertyController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const newPropertyData: TProperty = req.body;

    const userId: number = res.locals.userId;

    const newPropertyReq: TPropertyReq = {
        ...newPropertyData,
        userId: userId
    }
    const newProperty: TPropertyRes = await createPropertyService(newPropertyReq);
    return res.status(201).json(newProperty);
};

export const listPropertiesController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userId: number = res.locals.userId;
    
    const propertiesList: TPropertyRes[] | null = await listPropertiesService(userId);

    return res.status(201).json(propertiesList);
};

export const deletePropertyController = async(
    req: Request,
    res: Response
): Promise<Response>=> {
    const propertyId: number = parseInt(req.params.id);

    await deletePropertyService(propertyId);

    return res.status(204).send();
};

export const updatePropertyController = async(
    req: Request,
    res: Response
): Promise<Response>=> {
    const propertyId: number = parseInt(req.params.id);
    const properUpData: TPropertyUpdate = req.body;

    const updatedProperty: TProperty = await updatePropertyService(propertyId, properUpData);

    return res.status(200).json(updatedProperty);
};
