import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class MessagesAggregate1691019367180 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({name: 'messages_aggregate', columns: [
            {
                name: 'stream_name',
                type: 'text',
                isPrimary: true,
            },
            {
                name: 'id',
                type: 'uuid',
                isPrimary: true
            },
            {
                name: 'version',
                type: 'smallint',
                isNullable: false
            }
        ]}), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("messages_aggregate");
    }

}
