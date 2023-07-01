import { MigrationInterface, QueryRunner } from "typeorm"

export class AlterTableMovies1686264932226 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE genre_enum AS ENUM ('Action', 'Drama', 'Sci-Fi', 'Police', 'Comedy');
        ALTER TABLE movies ALTER COLUMN genre TYPE genre_enum USING genre::genre_enum;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE movies ALTER COLUMN genre TYPE varchar(32);
        DROP TYPE IF EXISTS genre_enum;
        `);
    }

}