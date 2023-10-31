export default defineEventHandler(async (event) => {
  if (!event?.context?.params?.id === 4897) {
    throw createError("DENIED");
  }

  const BASE_GUEST = {
    first_name: "",
    last_name: "",
    family_id: "",
    meal: "",
    high_chair: 0,
    accomodation: "",
    is_kid: 0,
    note: "",
    created_at: Date.now(),
    updated_at: Date.now(),
    deleted_at: null,
  };

  const DATA = [
    {
      ...BASE_GUEST,
      first_name: "Kevin",
      last_name: "Flynn",
      family_id: "belkev",
    },
    {
      ...BASE_GUEST,
      first_name: "Belinda",
      last_name: "Tang",
      family_id: "belkev",
    },
    {
      ...BASE_GUEST,
      first_name: "Wendy",
      last_name: "McElroy",
      family_id: "wendyryan",
    },
    {
      ...BASE_GUEST,
      first_name: "Ryan",
      last_name: "McElroy",
      family_id: "wendyryan",
    },
    {
      ...BASE_GUEST,
      first_name: "Max",
      last_name: "McElroy",
      family_id: "wendyryan",
      is_kid: 1,
    },
    {
      ...BASE_GUEST,
      first_name: "Neve",
      last_name: "McElroy",
      family_id: "wendyryan",
      is_kid: 1,
    },
    {
      ...BASE_GUEST,
      first_name: "Grace",
      last_name: "McElroy",
      family_id: "wendyryan",
      is_kid: 1,
    },
    {
      ...BASE_GUEST,
      first_name: "Zoe",
      last_name: "McElroy",
      family_id: "wendyryan",
      is_kid: 1,
    },
    {
      ...BASE_GUEST,
      first_name: "Paul",
      last_name: "flynn",
      family_id: "paulsandra",
    },
    {
      ...BASE_GUEST,
      first_name: "Sandra",
      last_name: "Flynn",
      family_id: "paulsandra",
    },
    {
      ...BASE_GUEST,
      first_name: "Gemma",
      last_name: "Dawson",
      family_id: "gemmar",
    },
    {
      ...BASE_GUEST,
      first_name: "Martin",
      last_name: "Dawson",
      family_id: "gemmar",
    },
    {
      ...BASE_GUEST,
      first_name: "Wendy",
      last_name: "McElroy",
      family_id: "polly",
    },
    {
      ...BASE_GUEST,
      first_name: "Paul",
      last_name: "McElroy",
      family_id: "polly",
    },
  ];

  const createId = (idx: string) => {
    return (parseInt(idx) + Date.now()).toString();
  };

  try {
    await db.deleteFrom("guests_data").execute();

    for (let i = 0, max = DATA.length; i < max; i++) {
      console.log(DATA[i]);
      await db
        .insertInto("guests_data")
        .values({ id: createId(i), ...DATA[i] })
        .executeTakeFirst();
    }

    return await db.selectFrom("guests_data").selectAll().execute();
  } catch (e) {
    console.error(e);
    throw createError({
      status: 400,
      message: "Guest Error",
    });
  }
});
