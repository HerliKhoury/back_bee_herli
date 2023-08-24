import { z } from "zod";


export const propertySchema = z.object({
    name: z.string().max(60).nonempty(),
    total_area: z.string().max(20).nonempty(),
    built_area: z.string().max(20).nonempty(),
    address: z.string().max(60).nonempty(),
    zip_code: z.string().max(8).nonempty(),
    price: z.string().max(20).nonempty()
});

export const propertySchemaReq = propertySchema.extend({
    userId: z.number()
});

export const propertySchemaRes = propertySchema.extend({
    id: z.number().int().positive()
});