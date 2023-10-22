import sqlite from "better-sqlite3";
import fs from "fs";
import { Kysely, SqliteDialect } from "kysely";

import type { ColumnType } from "kysely";

const DB_SCHEMA = "../database/schema.sql";
const DB_FILE_PATH = "../database/db.sqlite";

const sqliteDatabaseStart = () => {
  const hasDBFile = fs.existsSync(DB_FILE_PATH);

  console.log(hasDBFile ? "DB FILE EXISTS" : "DB FILE CREATED");

  const dbFile = sqlite(DB_FILE_PATH);
  if (!hasDBFile) {
    try {
      dbFile.exec(fs.readFileSync(DB_SCHEMA, "utf8"));
    } catch (e) {
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
  email_verification_token: VerificationTokenTable;
  password_reset_token: VerificationTokenTable;
  event_data: EventDataTable;
  place_data: PlaceDataTable;
  date_time_data: DateTimeTable;
  vote: VoteTable;
};

type UserTable = {
  id: string;
  email: string;
  email_verified: number;
};

type SessionTable = {
  id: string;
  user_id: string;
  idle_expires: ColumnType<bigint, number>;
  active_expires: ColumnType<bigint, number>;
};

type KeyTable = {
  id: string;
  user_id: string;
  hashed_password: null | string;
};

type VerificationTokenTable = {
  id: string;
  user_id: string;
  expires: ColumnType<bigint, number>;
};

type EventDataTable = {
  id: string;
  user_id: null | string;
  name: null | string;
  description: null | string;
  created_at: ColumnType<bigint, number>;
  updated_at: ColumnType<bigint, number>;
  deleted_at: null | ColumnType<bigint, number>;
};

type PlaceDataTable = {
  id: string;
  user_id: null | string;
  event_id: string;
  name: null | string;
  link: null | string;
  created_at: ColumnType<bigint, number>;
  updated_at: ColumnType<bigint, number>;
  deleted_at: null | ColumnType<bigint, number>;
};

type DateTimeTable = {
  id: string;
  user_id: null | string;
  event_id: string;
  place_id: string;
  date_time: string;
  created_at: ColumnType<bigint, number>;
  updated_at: ColumnType<bigint, number>;
  deleted_at: null | ColumnType<bigint, number>;
};

type VoteTable = {
  id: string;
  user_id: null | string;
  event_id: string;
  place_id: string;
  date_time_id: null | string;
  vote: number;
  created_at: ColumnType<bigint, number>;
  updated_at: ColumnType<bigint, number>;
  deleted_at: null | ColumnType<bigint, number>;
};
