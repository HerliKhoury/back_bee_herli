import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMigration1692894469003 implements MigrationInterface {
    name = 'FirstMigration1692894469003'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying(60) NOT NULL, "email" character varying(45) NOT NULL, "phone" character varying NOT NULL, "password" character varying(120) NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_8e1f623798118e629b46a9e6299" UNIQUE ("phone"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "property" ("id" SERIAL NOT NULL, "total_area" character varying(20) NOT NULL, "built_area" character varying(20) NOT NULL, "address" character varying(60) NOT NULL, "zip_code" character varying(8) NOT NULL, "price" character varying(20) NOT NULL, "userId" integer, CONSTRAINT "PK_d80743e6191258a5003d5843b4f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "property" ADD CONSTRAINT "FK_d90007b39cfcf412e15823bebc1" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "property" DROP CONSTRAINT "FK_d90007b39cfcf412e15823bebc1"`);
        await queryRunner.query(`DROP TABLE "property"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
