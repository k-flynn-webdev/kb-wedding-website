export default defineEventHandler(async (event) => {
  if (!event?.context?.params?.id === 4897) {
    throw createError("DENIED");
  }

  try {
    return await db.selectFrom("guests_data").selectAll().execute();
  } catch (e) {
    throw createError({
      status: 400,
      message: "Guest Error",
    });
  }
});
