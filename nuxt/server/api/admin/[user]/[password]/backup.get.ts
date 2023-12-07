import { backupDatabase } from "@/server/utils/db-backup";
import { gateAPIAdminPassword } from "@/helpers/utils";

export default defineEventHandler(async (event) => {
  gateAPIAdminPassword(event);

  try {
    await backupDatabase(sqliteDatabase);

    return true;
  } catch (e) {
    console.error(e);

    throw createError({
      status: 400,
      message: "Checkpoint Error",
    });
  }
});
