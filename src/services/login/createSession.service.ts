import { TLoginRequest, TLoginRes } from "../../interfaces/login.interfaces";
import { Repository } from "typeorm";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { MyError } from "../../errors/myError.error";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";


export const createSessionService = async (
    loginData: TLoginRequest
): Promise<TLoginRes> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    const user: User | null = await userRepo.findOne({
        where: {
            email: loginData.email
        },
    });

    if (!user) {
        throw new MyError("Credênciais inválidas", 401);
    };

    const passwordMatch = await compare(loginData.password, user.password);

    if (!passwordMatch) {
        throw new MyError("Credênciais inválidas", 401)
    };
    
    const token: string = jwt.sign(
        {
            userEmail: user.email,
            userId: user.id
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: "1d",
            subject: user.id.toString()
        }
    );

    return {
            token: token,
            name: user.name,
            email: user.email
            };
};