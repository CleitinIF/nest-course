import {MigrationInterface, QueryRunner} from "typeorm";

export class SchemaSync1643245786891 implements MigrationInterface {
    name = 'SchemaSync1643245786891'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "title" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "name" TO "title"`);
    }

}
