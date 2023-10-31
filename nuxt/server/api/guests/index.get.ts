export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  if (event?.context?.params?.id !== config.secretId) {
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
