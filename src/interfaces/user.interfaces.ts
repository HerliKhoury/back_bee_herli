import { z } from "zod";
import { userReqSchema, userResSchema, userSchema } from "../schemas/user.schemas";

export type TUser = z.infer<typeof userSchema>;
export type TUserReq = z.infer<typeof userReqSchema>;
export type TUserRes = z.infer<typeof userResSchema>;