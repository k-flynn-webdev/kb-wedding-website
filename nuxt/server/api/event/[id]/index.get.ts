export default defineEventHandler(async (event) => {
  try {
    return await db
      .selectFrom("event_data")
      .selectAll()
      .where("id", "=", event?.context?.params?.id)
      .where("deleted_at", "is", null)
      .execute();
  } catch (e) {
    throw createError({
      status: 400,
      message: " Event Update Error",
    });
  }
});
