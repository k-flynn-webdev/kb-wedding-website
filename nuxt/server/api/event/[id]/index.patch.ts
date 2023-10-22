// todo protect the fields
const allowedUpdatedFields = ["name", "description"];

export default defineEventHandler(async (event) => {
  const authRequest = auth.handleRequest(event);
  const session = await authRequest.validate();

  const body = await readBody(event);

  const allowedEdit = {
    name: body.name,
    description: body.description,
    updated_at: Date.now(),
  };

  try {
    const result = await db
      .updateTable("event_data")
      .set({ ...allowedEdit })
      .where("id", "=", event?.context?.params?.id)
      .where("user_id", "=", session?.user?.userId)
      .executeTakeFirst();

    if (!result.numUpdatedRows) throw "No row updated";

    return await db
      .selectFrom("event_data")
      .selectAll()
      .where("id", "=", event?.context?.params?.id)
      .execute();
  } catch (e) {
    throw createError({
      status: 400,
      message: " Event Update Error",
    });
  }
});
