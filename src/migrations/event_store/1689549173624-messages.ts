import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm"

export class Messages1689549173624 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({name: "messages", columns: [
            {
                name: "global_position",
                type: "bigint",
                isPrimary: true,
                isGenerated: true,
                generationStrategy: "increment"
            },
            {
                name: "stream_name",
                type: "text",
                isNullable: false
            },
            {
                name: "id",
                type: "uuid",
                isUnique: true,
                generationStrategy: "uuid",
                default: `uuid_generate_v4()`
            },
            {
                name: "type",
                type: "text",
                isNullable: false
            },
            {
                name: "position",
                type: "bigint",
                isNullable: false
            },
            {
                name: "metadata",
                type: "jsonb"
            },
            {
                name: "data",
                type: "jsonb"
            },
            {
                name: "time",
                type: "timestamp",
                default: "CURRENT_TIMESTAMP",
                isNullable: false
            }
        ]}), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("messages");
    }

}
