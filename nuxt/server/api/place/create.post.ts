import { db } from "@/server/utils/db.js";
import { createPlace } from "@/server/utils/place";

export default defineEventHandler(async (event) => {
  const authRequest = auth.handleRequest(event);
  const session = await authRequest.validate();

  const body = await readBody(event);

  try {
    return await createPlace(session?.user?.userId || null, body?.event_id);
  } catch (e) {
    throw createError({
      message: "An unknown error occurred",
      statusCode: 500,
    });
  }
});
