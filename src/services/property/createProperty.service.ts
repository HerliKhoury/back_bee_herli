import { Repository } from "typeorm";
import { TPropertyReq, TPropertyRes } from "../../interfaces/property.interfaces";
import { Property } from "../../entities/property.entity";
import { AppDataSource } from "../../data-source";
import { propertySchemaRes } from "../../schemas/propery.schemas";
import { MyError } from "../../errors/myError.error";


export const createPropertyService = async (
    newPropertyData: TPropertyReq
): Promise<TPropertyRes> => {

    const propertyRepo: Repository<Property> = AppDataSource.getRepository(Property);

    const newProperty: Property = new Property();
    newProperty.name = newPropertyData.name;
    newProperty.total_area = newPropertyData.total_area;
    newProperty.built_area = newPropertyData.built_area;
    newProperty.address = newPropertyData.address;
    newProperty.zip_code = newPropertyData.zip_code;
    newProperty.price = newPropertyData.price;
    newProperty.user = newPropertyData.userId;

    const property: Property | null = await propertyRepo.findOneBy({
        name: newPropertyData.name
    });

    if(property){
        throw new MyError("Nome já utilizado", 409)
    }else{
        const savedProperty = await propertyRepo.save(newProperty);

        const validProperty: TPropertyRes = propertySchemaRes.parse(savedProperty);

        return validProperty;
    }
}