// todo protect the fields
const allowedUpdatedFields = ["date_time"];

export default defineEventHandler(async (event) => {
  const authRequest = auth.handleRequest(event);
  const session = await authRequest.validate();

  const body = await readBody(event);

  const allowedEdit = {
    date_time: body.date_time,
    updated_at: Date.now(),
  };

  try {
    const result = await db
      .updateTable("date_time_data")
      .set({ ...allowedEdit })
      .where("id", "=", event?.context?.params?.id)
      .where("user_id", "=", session?.user?.userId)
      .executeTakeFirstOrThrow();

    if (!result.numUpdatedRows) throw "No row updated";

    return await db
      .selectFrom("date_time_data")
      .selectAll()
      .where("id", "=", event?.context?.params?.id)
      .execute();
  } catch (e) {
    console.log(e);
    throw createError({
      status: 400,
      message: "Date Time Update Error",
    });
  }
});
