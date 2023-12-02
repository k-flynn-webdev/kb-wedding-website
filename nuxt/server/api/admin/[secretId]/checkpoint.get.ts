import { checkpointDatabase } from "@/server/utils/db-checkpoint";
import { gateAPISecretId } from "@/helpers/utils";

export default defineEventHandler(async (event) => {
  gateAPISecretId(event);

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
