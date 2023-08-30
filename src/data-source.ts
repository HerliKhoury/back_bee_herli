import { DataSource, DataSourceOptions } from "typeorm";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const settings = (): DataSourceOptions => {

    const entitiesPath = path.join(__dirname, 'entities/**.{js,ts}');
    const migrationsPath = path.join(__dirname, 'migrations/**.{js,ts}');

    return {
        type: "postgres",
        url: process.env.DATABASE_URL!,
        synchronize: false,
        logging: false,
        entities: [entitiesPath],
        migrations: [migrationsPath]
    }
};

export const AppDataSource = new DataSource(settings());