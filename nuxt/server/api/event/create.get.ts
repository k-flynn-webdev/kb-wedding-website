import { db } from "@/server/utils/db.js";
import { createEventId } from "@/server/utils/event";

export default defineEventHandler(async (event) => {
  const authRequest = auth.handleRequest(event);
  const session = await authRequest.validate();

  try {
    return await createEventId(session?.user?.userId || null);
  } catch (e) {
    throw createError({
      message: "An unknown error occurred",
      statusCode: 500,
    });
  }
});
