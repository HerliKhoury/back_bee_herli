import { z } from "zod";


export const userSchema = z.object({
    id: z.number().int().positive(),
    name: z.string().max(60).nonempty(),
    email: z.string().email().max(45).nonempty(),
    phone: z.string(),
    password: z.string().max(120).nonempty(),
});

export const userResSchema = userSchema.omit({ password: true });

export const userReqSchema = userSchema.omit({id: true});
