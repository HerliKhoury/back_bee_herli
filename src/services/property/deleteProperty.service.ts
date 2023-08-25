import { Repository } from "typeorm";
import { Property } from "../../entities/property.entity";
import { AppDataSource } from "../../data-source";
import { MyError } from "../../errors/myError.error";

export const deletePropertyService = async (
    propertyId: number 
): Promise<void> => {

    const propertyRepo: Repository<Property> = AppDataSource.getRepository(Property);

    const property: Property | null = await propertyRepo.findOneBy({
        id: propertyId
    });

    if(!property){
        throw new MyError("Usuário não existe", 404)
    }else{
        await propertyRepo.remove(property);
    }
};