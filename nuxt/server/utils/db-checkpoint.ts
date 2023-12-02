import type { Database } from "better-sqlite3";

export const checkpointDatabase = async (db: Database) => {
  console.log(":: DB - PRAGMA FORCE CHECKPOINT : ");

  db.exec(/* SQL */ `PRAGMA schema.wal_checkpoint;`);
};
