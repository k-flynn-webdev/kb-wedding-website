import type { Database } from "better-sqlite3";
import { readLocaFile } from "@/helpers/utils";

const migration_01 = "server/db/migrations/001-migrate.sql";
const migration_02 = "server/db/migrations/002-migrate.sql";

const POST_EXEC = "COMMIT;";
const PRE_EXEC = (version: number) =>
  `BEGIN; PRAGMA "user_version" = ${version};`;

export const migrateDatabase = (db: Database) => async () => {
  const loadUserVersion = (): number =>
    db.prepare(`PRAGMA "user_version"`).get().user_version;

  const version = loadUserVersion();

  console.log(":: DB - PRAGMA      : " + version);

  switch (version) {
    case 0: {
      db.exec(/* SQL */ `
        ${PRE_EXEC(1)}
        ${await readLocaFile(migration_01)}
        ${POST_EXEC}
      `);
    }
    case 1: {
      db.exec(/* SQL */ `
        ${PRE_EXEC(2)}
        ${await readLocaFile(migration_02)}
        ${POST_EXEC}
      `);
    }
  }
};
