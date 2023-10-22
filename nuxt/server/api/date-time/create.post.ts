import { db } from "@/server/utils/db.js";
import { createDateTime } from "@/server/utils/date-time";

export default defineEventHandler(async (event) => {
  const authRequest = auth.handleRequest(event);
  const session = await authRequest.validate();

  const body = await readBody(event);

  try {
    return await createDateTime(
      session?.user?.userId || null,
      body?.event_id,
      body?.place_id
    );
  } catch (e) {
    throw createError({
      message: "An unknown error occurred",
      statusCode: 500,
    });
  }
});
