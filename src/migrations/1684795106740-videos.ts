import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Videos1684795106740 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // queryRunner.createDatabase("micro_videos", true);

        await queryRunner.createTable(new Table({name: "videos", columns: [
            {
                name: "owner_id",
                type: "varchar(20)",
                isPrimary: true
            },
            {
                name: "name",
                type: "varchar(128)",
                isNullable: false
            },
            {
                name: "description",
                type: "varchar(255)",
                isNullable: false
            },
            {
                name: "transcoding_status",
                type: "varchar(32)"
            },
            {
                name: "view_count",
                type: "int",
                default: 0
            }
        ]}), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("videos");
        // await queryRunner.dropDatabase("micro_videos");
    }
}
