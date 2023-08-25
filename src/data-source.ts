import { DataSource, DataSourceOptions } from "typeorm";
import dotenv from "dotenv";
import { MyError } from "./errors/myError.error";

dotenv.config();

const settings = (): DataSourceOptions => {
    const nodeEnv: string | undefined = process.env.NODE_ENV;
    
    if (nodeEnv === "test") {
        return {
          type: "sqlite",
          database: ":memory:",
          synchronize: true,
          entities: ['./src/entities/*{.ts,.js}'],
        };
    }

    const dbName: string | undefined = process.env.DATA_BASE;

    if (!dbName) throw new MyError("Faltando env var: 'DB_NAME'");

    return {
        migrationsTableName: 'migrations',
        type: "postgres",
        host: process.env.HOST!,
        port: 5432,
        username: process.env.USER!,
        password: process.env.PASSWORD!,
        database: process.env.DATA_BASE!,
        logging: false,
        synchronize: false,
        name: 'default',
        entities: ['src/**/**.entity{.ts,.js}'],
        migrations: ['src/migrations/**/*{.ts,.js}'],
        subscribers: ['src/subscriber/**/*{.ts,.js}'],
    }
};

export const AppDataSource = new DataSource(settings());