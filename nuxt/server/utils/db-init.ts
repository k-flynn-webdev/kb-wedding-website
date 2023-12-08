import { Kysely, SqliteDialect } from "kysely";
import sqlite from "better-sqlite3";
import fs from "fs";
import { migrateDatabase } from "@/server/utils/db-migrate";
import type {
  UserTable,
  SessionTable,
  KeyTable,
  GuestData,
} from "@/interfaces";

const config = useRuntimeConfig();

const DB_STRING = ":: DB";

const dbFileName = "db.sqlite";
const schemaFileName = "schema-01.sql";

const DB_SCHEMA_FILE = `server/db/schema/${schemaFileName}`;
const DB_MIGRATIONS_PATH = "server/db/migrations/";
const DB_FILE_PATH = config.isDev
  ? `../database/${dbFileName}`
  : `/app/database/${dbFileName}`;

export const initDBFile = () => {
  return sqlite(DB_FILE_PATH);
};

const sqliteDatabaseStart = () => {
  const hasDBFile = fs.existsSync(DB_FILE_PATH);

  console.log(`${DB_STRING} - DB Schema   : ${DB_SCHEMA_FILE}`);
  console.log(`${DB_STRING} - DB File     : ${DB_FILE_PATH}`);

  console.log(
    hasDBFile
      ? `${DB_STRING} - File EXISTS : ${DB_FILE_PATH}`
      : `${DB_STRING} - File CREATED: ${DB_FILE_PATH}`
  );

  const dbFile = initDBFile();

  // todo figure this out??? why it makes my db not readable??
  dbFile.pragma("journal_mode = WAL");

  if (!hasDBFile) {
    try {
      dbFile.exec(fs.readFileSync(DB_SCHEMA_FILE, "utf8"));
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
  user: UserTable;
  user_session: SessionTable;
  user_key: KeyTable;
  guests_data: GuestData;
};

migrateDatabase(sqliteDatabase);
