import { db } from "@/server/utils/db.js";

export default defineEventHandler(async (event) => {
  try {
    return await db.deleteFrom("vote_data").returningAll().execute();
  } catch (e) {
    throw createError({
      message: "An unknown error occurred",
      statusCode: 500,
    });
  }
});
