import { Kysely } from "kysely";
import { type Migration } from "sqlite-migrator";

// eslint-disable-next-line
async function up(db: Kysely<any>): Promise<void> {
  return await db.schema
    .createTable("users")
    .addColumn("id", "integer", (col) => col.primaryKey())
    .addColumn("first_name", "varchar(255)")
    .addColumn("last_name", "varchar(255)")
    .execute();
}

// eslint-disable-next-line
async function transform(
  source: Kysely<any>,
  target: Kysely<any>
): Promise<void> {
  // Do some data transformation logic if this migration requires it
  // Fetch data from source database
  // Perform some transformation
  // And insert it to target database
  // Done.
}

const migration: Migration = {
  up,
  transform,
};

export default migration;
