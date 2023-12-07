import { checkpointDatabase } from "@/server/utils/db-checkpoint";
import { gateAPIAdminPassword } from "@/helpers/utils";

// todo this feature is broken for now ><!
export default defineEventHandler(async (event) => {
  gateAPIAdminPassword(event);

  try {
    await checkpointDatabase(sqliteDatabase);

    return true;
  } catch (e) {
    console.error(e);

    throw createError({
      status: 400,
      message: "Checkpoint Error",
    });
  }
});
