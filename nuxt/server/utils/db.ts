import sqlite from "better-sqlite3";
import fs from "fs";
import { Kysely, SqliteDialect } from "kysely";

import { type GuestData } from "@/interfaces";

const config = useRuntimeConfig();

const dbFileName = "db.sqlite";
const schemaFileName = "schema-01.sql";

const DB_SCHEMA = config.isDev
  ? `../database/${schemaFileName}`
  : `/app/database/${schemaFileName}`;
const DB_FILE_PATH = config.isDev
  ? `../database/${dbFileName}`
  : `/app/database/${dbFileName}`;

const sqliteDatabaseStart = () => {
  const hasDBFile = fs.existsSync(DB_FILE_PATH);
  const hasDBSchema = fs.existsSync(DB_SCHEMA);

  console.log("dbFileName", dbFileName);
  console.log("schemaFileName", schemaFileName);

  console.log(hasDBFile ? "DB FILE EXISTS" : "DB FILE CREATED");
  console.log(DB_FILE_PATH);

  console.log("hasDBSchema", hasDBSchema);

  const dbFile = sqlite(DB_FILE_PATH);
  console.log("dbFile", dbFile);

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
  guests_data: GuestData;
};
