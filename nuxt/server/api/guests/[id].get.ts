export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    return await db
      .selectFrom("guests_data")
      .selectAll()
      .where("first_name", "=", body.firstName)
      .where("last_name", "=", body.lastName)
      .execute();
  } catch (e) {
    throw createError({
      status: 400,
      message: "Guest Error",
    });
  }
});
