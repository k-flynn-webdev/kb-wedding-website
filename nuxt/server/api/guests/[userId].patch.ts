const logKeys = [
  "attending",
  "meal",
  "high_chair",
  "accomodation",
  "note",
  "updated_at",
];

const NEW_LINE = "********************************************************";

const logFunction = (data: any) => {
  console.log(NEW_LINE);
  console.log(`ID: ${data.userId}`);
  console.log(`Name: ${data.first_name} ${data.last_name}`);
  logKeys.forEach((key) => {
    console.log(`${key}: ${data[key]}`);
  });
};

export default defineEventHandler(async (event: any) => {
  const body = await readBody(event);

  const allowedEdit: any = {
    attending: body.attending ? 1 : 0,
    meal: body.meal,
    high_chair: body.high_chair ? 1 : 0,
    accomodation: body.accomodation,
    note: body.note,
    updated_at: Date.now(),
  };

  logFunction({
    userId: event?.context?.params?.userId,
    ...body,
    ...allowedEdit,
  });

  try {
    const result = await db
      .updateTable("guests_data")
      .set({ ...allowedEdit })
      .where("id", "=", event?.context?.params?.userId)
      .executeTakeFirst();

    if (!result.numUpdatedRows) throw "No row updated";

    return await db
      .selectFrom("guests_data")
      .selectAll()
      .where("id", "=", event?.context?.params?.userId)
      .execute();
  } catch (e) {
    console.error(e);
    throw createError({
      status: 400,
      message: "Guest Error",
    });
  }
});
