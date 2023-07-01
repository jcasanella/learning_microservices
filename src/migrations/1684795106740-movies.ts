import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Movies1684795106740 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({name: "movies", columns: [
            {
                name: "id",
                type: "uuid",
                isPrimary: true,
                isUnique: true,
                generationStrategy: "uuid",
                default: `uuid_generate_v4()`
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
                name: "genre",
                type: "varchar(32)"
            },
            {
                name: "rating",
                type: "numeric(3,2)",
                default: 0
            }
        ]}), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("movies");
    }
}