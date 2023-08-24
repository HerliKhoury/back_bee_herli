import { Repository } from "typeorm";
import { TProperty, TPropertyReq, TPropertyRes } from "../../interfaces/property.interfaces";
import { Property } from "../../entities/property.entity";
import { AppDataSource } from "../../data-source";
import { propertySchemaRes } from "../../schemas/propery.schemas";


export const createPropertyService = async (
    newPropertyData: TPropertyReq
): Promise<TPropertyRes> => {

    const propertyRepo: Repository<Property> = AppDataSource.getRepository(Property);

    const newProperty: TPropertyRes = propertyRepo.create(newPropertyData);

    const validProperty: TPropertyRes = propertySchemaRes.parse(newProperty);

    await propertyRepo.save(validProperty);
    
    return validProperty;
}