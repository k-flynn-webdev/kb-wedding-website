import type { ColumnType } from "kysely";

export interface defaultCreateUpdateDelete {
  created_at: ColumnType<bigint, number>;
  updated_at: ColumnType<bigint, number>;
  deleted_at: null | ColumnType<bigint, number>;
}

export interface GuestData extends defaultCreateUpdateDelete {
  id: string;
  first_name: string;
  last_name: string;
  family_id: string;
  meal: string;
  note: string;
  accomodation: string;
  is_kid: boolean;
  high_chair: boolean;
}
