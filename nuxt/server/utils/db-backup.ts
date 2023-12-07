import type { Database } from "better-sqlite3";

export const backupDatabase = async (db: Database) => {
  const newDate = new Date();

  const db_backup_name = `${newDate.toISOString().split("T")[0]}-backup.sqlite`;

  try {
    await db.backup("../database/backup/" + db_backup_name);

    console.log(`:: DB - BACKUP : ${db_backup_name}`);
  } catch (e) {
    console.error(e);
  }
};
