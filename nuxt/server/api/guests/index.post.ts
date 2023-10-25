export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    const result = await db
      .selectFrom("guests_data")
      .selectAll()
      .where("first_name", "like", "%" + body.first_name + "%")
      .where("last_name", "like", "%" + body.last_name + "%")
      .execute();

    if (!result) throw "no result";

    return await db
      .selectFrom("guests_data")
      .selectAll()
      .where(
        "family_id",
        "in",
        result.map((item) => item.family_id)
      )
      .execute();
  } catch (e) {
    throw createError({
      status: 400,
      message: "Guest Error",
    });
  }
});
