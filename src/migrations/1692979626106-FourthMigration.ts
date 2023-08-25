import { MigrationInterface, QueryRunner } from "typeorm";

export class FourthMigration1692979626106 implements MigrationInterface {
    name = 'FourthMigration1692979626106'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_d72ea127f30e21753c9e229891e"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "userId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_d72ea127f30e21753c9e229891e" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
