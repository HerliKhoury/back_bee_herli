import { Repository, createQueryBuilder } from "typeorm";
import { Property } from "../../entities/property.entity";
import { TPropertyRes } from "../../interfaces/property.interfaces";
import { AppDataSource } from "../../data-source";

export const listPropertiesService = async ( 
    userId: number
): Promise<TPropertyRes[] | null> => {

    const propertyRepo: Repository<Property> = AppDataSource.getRepository(Property);
    
    const propertiesList: TPropertyRes[] | null = 
        await propertyRepo.createQueryBuilder("property")
            .innerJoin("property.user", "user") 
            .where("user.id = :userId", { userId: userId })
            .getMany();

    return propertiesList;
}


