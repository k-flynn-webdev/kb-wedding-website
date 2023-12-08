import type { Database } from "better-sqlite3";
import { readLocaFile } from "@/helpers/utils";

const migration_01 = "server/db/migrations/001-migrate.sql";

const POST_EXEC = "COMMIT;";
const PRE_EXEC = (version: number) =>
  `BEGIN; PRAGMA "user_version" = ${version};`;
const MIGRATION_COMPLETE = (version: number) =>
  console.log(`MIGRATION COMPLETE ${version}`);

export const migrateDatabase = async (db: Database) => {
  const loadUserVersion = (): number =>
    db.prepare(`PRAGMA "user_version"`).get().user_version;

  const version = loadUserVersion();

  console.log(":: DB - PRAGMA      : " + version);

  switch (
    version as number
    // case 0: {
    //   db.exec(/* SQL */ `
    //     ${PRE_EXEC(1)}
    //     ${await readLocaFile(migration_01)}
    //     ${POST_EXEC}
    //   `);
    //   MIGRATION_COMPLETE(version);
    // }
    // case 1: {
    //   db.exec(/* SQL */ `
    //     ${PRE_EXEC(2)}
    //     ${await readLocaFile(migration_02)}
    //     ${POST_EXEC}
    //   `);
    //   MIGRATION_COMPLETE(version);
    // }
    // case 2: {
    //   db.exec(/* SQL */ `
    //     ${PRE_EXEC(3)}
    //     ${await readLocaFile(migration_03)}
    //     ${POST_EXEC}
    //   `);
    //   MIGRATION_COMPLETE(version);
    // }
  ) {
  }
};
