import { MigrationInterface, QueryRunner } from "typeorm";

export class SecondMigration1692974903414 implements MigrationInterface {
    name = 'SecondMigration1692974903414'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "property" ADD "name" character varying(60) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "property" DROP COLUMN "name"`);
    }

}
