import sqlite from "better-sqlite3";
import fs from "fs";
import { Kysely, SqliteDialect } from "kysely";

import type { ColumnType } from "kysely";

const config = useRuntimeConfig();
console.log("Runtime config:", config);

const DB_SCHEMA = config.isDev
  ? "../database/schema.sql"
  : "/app/database/schema.sql";
const DB_FILE_PATH = config.isDev
  ? "../database/db.sqlite"
  : "/app/database/db.sqlite";

const sqliteDatabaseStart = () => {
  const hasDBFile = fs.existsSync(DB_FILE_PATH);

  console.log(hasDBFile ? "DB FILE EXISTS" : "DB FILE CREATED");

  const dbFile = sqlite(DB_FILE_PATH);
  if (!hasDBFile) {
    try {
      dbFile.exec(fs.readFileSync(DB_SCHEMA, "utf8"));
    } catch (e) {
      console.error(e);
      console.warn("DB Error / Warning: ");
      console.warn(e);
    }
  }

  return dbFile;
};

export const sqliteDatabase = sqliteDatabaseStart();

const dialect = new SqliteDialect({
  database: sqliteDatabase,
});

export const db = new Kysely<Database>({
  dialect,
});

type Database = {
  guests_data: GuestTable;
};

type GuestTable = {
  id: string;
  first_name: string;
  last_name: string;
  family_id: string;
  meal: string;
  note: string;
  accomodation: string;
  is_kid: boolean;
  high_chair: boolean;
  created_at: ColumnType<bigint, number>;
  updated_at: ColumnType<bigint, number>;
  deleted_at: null | ColumnType<bigint, number>;
};
