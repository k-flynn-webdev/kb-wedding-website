export default defineEventHandler(async (event) => {
  const authRequest = auth.handleRequest(event);
  const session = await authRequest.validate();

  try {
    return await db
      .selectFrom("vote_data")
      .selectAll()
      .where("id", "=", event?.context?.params?.id)
      .where("user_id", "=", session?.user?.userId)
      .where("deleted_at", "is", null)
      .execute();
  } catch (e) {
    throw createError({
      status: 400,
      message: "Vote Error",
    });
  }
});
