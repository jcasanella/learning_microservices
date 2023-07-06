import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class AddColumnSmallSummary1688682065187 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('movies', new TableColumn({
            name: 'short_summary',
            type: 'varchar(255)',
            isNullable: false,
            default: '',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE movies DROP COLUMN IF EXISTS short_summary`);
    }

}
