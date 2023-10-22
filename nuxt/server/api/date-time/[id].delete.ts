// todo : only the session owner should be able to delete a time?

export default defineEventHandler(async (event) => {
  const allowedEdit = {
    deleted_at: Date.now(),
  };

  try {
    return await db
      .updateTable("date_time_data")
      .set({ ...allowedEdit })
      .where("id", "=", event?.context?.params?.id)
      .executeTakeFirst();
  } catch (e) {
    throw createError({
      status: 400,
      message: "Date Time Delete Error",
    });
  }
});
