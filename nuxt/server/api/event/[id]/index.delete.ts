// todo : only the creatore/owner should be able to delete a event?

export default defineEventHandler(async (event) => {
  const allowedEdit = {
    deleted_at: Date.now(),
  };

  try {
    return await db
      .updateTable("event_data")
      .set({ ...allowedEdit })
      .where("id", "=", event?.context?.params?.id)
      .executeTakeFirst();
  } catch (e) {
    throw createError({
      status: 400,
      message: " Event Delete Error",
    });
  }
});
