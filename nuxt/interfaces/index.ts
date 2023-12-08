import type { ColumnType } from "kysely";

export interface defaultRow {
  id: string;
}

export interface defaultCreateUpdateDelete extends defaultRow {
  created_at: ColumnType<bigint, number>;
  updated_at: ColumnType<bigint, number>;
  deleted_at: null | ColumnType<bigint, number>;
}

export interface UserTable extends defaultCreateUpdateDelete {
  email: string;
  email_verified: number;
}

export interface SessionTable {
  user_id: string;
  idle_expires: ColumnType<bigint, number>;
  active_expires: ColumnType<bigint, number>;
}

export interface KeyTable {
  user_id: string;
  hashed_password: null | string;
}

export interface GuestData extends defaultCreateUpdateDelete {
  attending: boolean;
  first_name: string;
  last_name: string;
  family_id: string;
  meal: string;
  note: string;
  accomodation: string;
  is_kid: boolean;
  high_chair: boolean;
}
