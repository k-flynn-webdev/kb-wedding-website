export default defineEventHandler(async (event) => {
  if (!event?.context?.params?.id === 4897) {
    throw createError("DENIED");
  }

  const BASE_GUEST = {
    first_name: "",
    last_name: "",
    family_id: "",
    meal: "",
    kids_meal: 0,
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
      first_name: "kevin",
      last_name: "flynn",
      family_id: "belkev",
      kids_meal: 1,
    },
    {
      ...BASE_GUEST,
      first_name: "belinda",
      last_name: "tang",
      family_id: "belkev",
      accomodation: "ravenswood",
    },
    {
      ...BASE_GUEST,
      first_name: "wendy",
      last_name: "mcelroy",
      family_id: "wendyryan",
    },
    {
      ...BASE_GUEST,
      first_name: "ryan",
      last_name: "mcelroy",
      family_id: "wendyryan",
    },
    {
      ...BASE_GUEST,
      first_name: "max",
      last_name: "mcelroy",
      family_id: "wendyryan",
      is_kid: 1,
    },
    {
      ...BASE_GUEST,
      first_name: "neeve",
      last_name: "mcelroy",
      family_id: "wendyryan",
      is_kid: 1,
    },
    {
      ...BASE_GUEST,
      first_name: "grace",
      last_name: "mcelroy",
      family_id: "wendyryan",
      is_kid: 1,
    },
    {
      ...BASE_GUEST,
      first_name: "zoe",
      last_name: "mcelroy",
      family_id: "wendyryan",
      is_kid: 1,
    },
    {
      ...BASE_GUEST,
      first_name: "paul",
      last_name: "flynn",
      family_id: "paulsandra",
    },
    {
      ...BASE_GUEST,
      first_name: "sandra",
      last_name: "flynn",
      family_id: "paulsandra",
    },
    {
      ...BASE_GUEST,
      first_name: "gemma",
      last_name: "zzz",
      family_id: "gemmazzz",
    },
    {
      ...BASE_GUEST,
      first_name: "martin",
      last_name: "zzz",
      family_id: "gemmazzz",
    },
    {
      ...BASE_GUEST,
      first_name: "wendy",
      last_name: "mcelroy",
      family_id: "polly",
    },
    {
      ...BASE_GUEST,
      first_name: "paul",
      last_name: "mcelroy",
      family_id: "polly",
    },
  ];

  try {
    for (let i = 0, max = DATA.length; i < max; i++) {
      console.log(DATA[i]);
      await db
        .insertInto("guests_data")
        .values({ id: parseInt(i).toString(), ...DATA[i] })
        .executeTakeFirst();
    }

    return await db.selectFrom("guests_data").selectAll().execute();
  } catch (e) {
    console.log(e);
    throw createError({
      status: 400,
      message: "Guest Error",
    });
  }
});
