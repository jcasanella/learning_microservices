import { MigrationInterface, QueryRunner } from "typeorm"

export class AlterTableVideos1686264932226 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE transcoding_enum AS ENUM ('MP4', 'MOV', 'FLV');
        ALTER TABLE videos ALTER COLUMN transcoding_status TYPE transcoding_enum USING transcoding_status::transcoding_enum;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE videos ALTER COLUMN transcoding_status TYPE varchar(32);
        DROP TYPE IF EXISTS transcoding;
        `);
    }

}