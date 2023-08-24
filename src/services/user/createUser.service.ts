import { Repository } from "typeorm";
import { TUser, TUserReq, TUserRes } from "../../interfaces/user.interfaces";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { MyError } from "../../errors/myError.error";
import { userResSchema } from "../../schemas/user.schemas";


export const createUserService = async (newUserData: TUserReq): Promise<TUserRes> => {

    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    const userEmail: string = newUserData.email;

    const user: User | null = await userRepo.findOne({
        where: {
            email: userEmail
        }
    });

    if(user){
        throw new MyError("Email já cadastrado", 409)
    } else {
        const newUser: TUser = userRepo.create(newUserData);

        await userRepo.save(newUser);

        const validUser: TUserRes = userResSchema.parse(newUser);

        return validUser;
    }
};