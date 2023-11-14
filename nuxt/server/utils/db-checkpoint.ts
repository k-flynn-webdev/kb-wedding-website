import type { Database } from "better-sqlite3";

export const checkpointDatabase = (db: Database) => async () => {
  console.log(":: DB - PRAGMA FORCE CHECKPOINT : ");

  db.exec(/* SQL */ `PRAGMA schema.wal_checkpoint;`);
};
