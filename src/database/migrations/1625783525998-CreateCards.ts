import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCards1625783525998 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "cards",
        columns: [
          { name: "id", type: "uuid", isPrimary: true },
          { name: "owner_list", type: "uuid" },
          { name: "name", type: "varchar" },
          { name: "description", type: "varchar" },
        ],
        foreignKeys: [
          {
            name: "FKList",
            referencedTableName: "lists",
            referencedColumnNames: ["id"],
            columnNames: ["owner_list"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("cards");
  }
}
