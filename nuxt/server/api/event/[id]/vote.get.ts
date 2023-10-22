import { transformVote } from "@/server/utils/vote";

export default defineEventHandler(async (event) => {
  const authRequest = auth.handleRequest(event);
  const session = await authRequest.validate();

  try {
    return await db
      .selectFrom("vote_data")
      .selectAll()
      .where("event_id", "=", event?.context?.params?.id)
      .where("deleted_at", "is", null)
      .execute()
      .then((data) => transformVote(data));
  } catch (e) {
    throw createError({
      status: 400,
      message: " Event Vote Data Error",
    });
  }
});
