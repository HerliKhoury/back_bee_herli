import { z } from "zod";
import { loginRequestSchema } from "../schemas/login.schemas";

export type TLoginRequest = z.infer<typeof loginRequestSchema>;
export type TLoginRes = {
    token: string,
    name: string,
    email: string
};