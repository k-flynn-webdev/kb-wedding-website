import { checkpointDatabase } from "@/server/urils/db-chechkpont.ts";
import { gateAPISecretId } from "@/helpers/utils";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  gateAPISecretId(event);

  try {
    await checkpointDatabase(db);

    return true;
  } catch (e) {
    console.error(e);

    throw createError({
      status: 400,
      message: "Checkpoint Error",
    });
  }
});
