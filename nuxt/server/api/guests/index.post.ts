export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    const result_single = await db
      .selectFrom("guests_data")
      .selectAll()
      .where("first_name", "like", body.first_name.trim())
      .where("last_name", "like", body.last_name)
      .executeTakeFirst();

    if (!result_single) throw "no result";

    return await db
      .selectFrom("guests_data")
      .selectAll()
      .where("family_id", "=", result_single.family_id.trim())
      .execute();
  } catch (e) {
    throw createError({
      status: 400,
      message: "Guest Error",
    });
  }
});
