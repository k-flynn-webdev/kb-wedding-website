import { gateAPIAdminPassword } from "@/helpers/utils";

export default defineEventHandler(async (event) => {
  gateAPIAdminPassword(event);

  try {
    return await db.selectFrom("guests_data").selectAll().execute();
  } catch (e) {
    console.log(e);
    throw createError({
      status: 400,
      message: "Guest Error",
    });
  }
});
