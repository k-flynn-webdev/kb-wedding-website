// todo : only the session owner should be able to delete a place?

export default defineEventHandler(async (event) => {
  const allowedEdit = {
    deleted_at: Date.now(),
  };

  try {
    return await db
      .updateTable("place_data")
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
