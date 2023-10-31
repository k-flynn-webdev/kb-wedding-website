export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const MIN_LENGTH = 3;

  try {
    if (
      body.first_name.length < MIN_LENGTH ||
      body.last_name.length < MIN_LENGTH
    )
      throw "Denied";

    const result = await db
      .selectFrom("guests_data")
      .selectAll()
      .where("first_name", "like", "%" + body.first_name + "%")
      .where("last_name", "like", "%" + body.last_name + "%")
      .execute();

    if (!result) throw "no result";

    const resultFamily = await db
      .selectFrom("guests_data")
      .selectAll()
      .where(
        "id",
        "not in",
        result.map((item) => item.id)
      )
      .where(
        "family_id",
        "in",
        result.map((item) => item.family_id)
      )
      .execute();

    return [...result, ...resultFamily];
  } catch (e) {
    throw createError({
      status: 400,
      message: "Guest Error",
    });
  }
});
