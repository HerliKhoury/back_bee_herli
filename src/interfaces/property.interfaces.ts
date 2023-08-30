import { z } from "zod";
import { propertySchema, propertySchemaReq, propertySchemaRes } from "../schemas/propery.schemas";
import { DeepPartial } from "typeorm";

export type TProperty = z.infer<typeof propertySchema>;
export type TPropertyRes = z.infer<typeof propertySchemaRes>;
export type TPropertyReq = z.infer<typeof propertySchemaReq>;
export type TPropertyUpdate = DeepPartial<TPropertyReq>