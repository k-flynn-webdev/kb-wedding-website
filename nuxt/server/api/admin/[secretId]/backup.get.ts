import { backupDatabase } from "@/server/utils/db-backup";
import { gateAPISecretId } from "@/helpers/utils";

export default defineEventHandler(async (event) => {
  gateAPISecretId(event);

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
