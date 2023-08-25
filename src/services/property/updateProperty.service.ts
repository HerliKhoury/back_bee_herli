import { Repository } from "typeorm";
import { TProperty, TPropertyRes, TPropertyUpdate } from "../../interfaces/property.interfaces";
import { Property } from "../../entities/property.entity";
import { AppDataSource } from "../../data-source";
import { MyError } from "../../errors/myError.error";
import { propertySchemaRes } from "../../schemas/propery.schemas";

export const updatePropertyService = async (
    propertyId: number,
    propertyUpData: TPropertyUpdate
): Promise<TProperty> => {
    const propertyRepo: Repository<Property> = AppDataSource.getRepository(Property);

    const oldPropertyData: Property | null = await propertyRepo.findOneBy({
        id: propertyId
    });

    if(!oldPropertyData){
        throw new MyError("Imóvel não encontrado", 404);
    }

    const newPropertyData: Property = propertyRepo.create({
        ...oldPropertyData,
        ...propertyUpData
    });

    await propertyRepo.save(newPropertyData);

    const returnProperty: TPropertyRes = propertySchemaRes.parse(newPropertyData);

    return returnProperty;
}