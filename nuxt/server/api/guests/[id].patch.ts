export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const allowedEdit = {
    meal: body.meal,
    high_chair: body.high_chair ? 1 : 0,
    accomodation: body.accomodation,
    note: body.note,
    updated_at: Date.now(),
  };

  try {
    const result = await db
      .updateTable("guests_data")
      .set({ ...allowedEdit })
      .where("id", "=", event?.context?.params?.id)
      .executeTakeFirst();

    if (!result.numUpdatedRows) throw "No row updated";

    return await db
      .selectFrom("guests_data")
      .selectAll()
      .where("id", "=", event?.context?.params?.id)
      .execute();
  } catch (e) {
    console.log(e);
    throw createError({
      status: 400,
      message: "Guest Error",
    });
  }
});
