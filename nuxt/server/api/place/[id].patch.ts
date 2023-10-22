// todo protect the fields
const allowedUpdatedFields = ["name", "link", "date_time"];

export default defineEventHandler(async (event) => {
  const authRequest = auth.handleRequest(event);
  const session = await authRequest.validate();

  const body = await readBody(event);

  const allowedEdit = {
    name: body.name,
    link: body.link,
    date_time: body.date_time,
    updated_at: Date.now(),
  };

  try {
    const result = await db
      .updateTable("place_data")
      .set({ ...allowedEdit })
      .where("id", "=", event?.context?.params?.id)
      .where("user_id", "=", session?.user?.userId)
      .executeTakeFirst();

    if (!result.numUpdatedRows) throw "No row updated";

    return await db
      .selectFrom("place_data")
      .selectAll()
      .where("id", "=", event?.context?.params?.id)
      .where("user_id", "=", session?.user?.userId)
      .execute();
  } catch (e) {
    throw createError({
      status: 400,
      message: " Event Update Error",
    });
  }
});
