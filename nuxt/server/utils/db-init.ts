import { Kysely, SqliteDialect } from "kysely";
import sqlite from "better-sqlite3";
import fs from "fs";

import { type GuestData } from "@/interfaces";

const config = useRuntimeConfig();

const DB_STRING = ":: DB";
const dbFileName = "db.sqlite";
const schemaFileName = "schema-01.sql";

const DB_SCHEMA = `server/db/schema/${schemaFileName}`;

const DB_FILE_PATH = config.isDev
  ? `../database/${dbFileName}`
  : `/app/database/${dbFileName}`;

const sqliteDatabaseStart = () => {
  const hasDBFile = fs.existsSync(DB_FILE_PATH);

  console.log(`${DB_STRING} - File name : ${dbFileName}`);
  console.log(`${DB_STRING} - Schema    : ${schemaFileName}`);
  console.log(
    hasDBFile
      ? `${DB_STRING} - File EXISTS ${DB_FILE_PATH}`
      : `${DB_STRING} - File CREATED ${DB_FILE_PATH}`
  );

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
