import { MigrationInterface, QueryRunner } from "typeorm"

export class VideosData1685051393081 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO videos (owner_id, name, description, transcoding_status, view_count)
        VALUES
            ('0001', 'StarWars', 'Science fiction movie', 'MP4', 1000),
            ('0002', 'Batman the Dark Knight', 'A super hero movie', 'MOV', 7689),
            ('0003', 'Fast & Furious', 'Speed cars', 'MOV', 1234),
            ('0004', 'Harry Potter', 'A lot of magic', 'MP4', 654),
            ('0005', 'Scream', 'Horror movie', 'FLV', 321),
            ('0006', 'Torrente', 'Spanish humor', 'MP4', 78),
            ('0007', 'Shark', 'A white shark...', 'MP4', 901),
            ('0008', 'Indiana Jones', 'Adventure movie', 'FLV', 561),
            ('0009', 'The mummy', 'Another Adventure movie', 'MOV', 612),
            ('0010', 'Platoon', 'The Vietnam war', 'MP4', 2567);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`TRUNCATE TABLE videos`);
    }

}
