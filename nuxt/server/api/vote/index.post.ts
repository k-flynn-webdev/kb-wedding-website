import { db } from "@/server/utils/db.js";
import { createVote } from "@/server/utils/vote";

export default defineEventHandler(async (event) => {
  const authRequest = auth.handleRequest(event);
  const session = await authRequest.validate();

  const body = await readBody(event);

  try {
    return await createVote(
      session?.user?.userId || null,
      body?.event_id,
      body?.place_id,
      body?.date_time_id || null,
      body?.vote
    );
  } catch (e) {
    throw createError({
      message: "An unknown error occurred",
      statusCode: 500,
    });
  }
});
