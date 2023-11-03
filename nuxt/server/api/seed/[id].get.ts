export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  if (event?.context?.params?.id !== config.secretId) {
    throw createError("DENIED");
  }

  const BASE_GUEST = {
    attending: 0,
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

  const DATA_KEV = [
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
      first_name: "Wendy Senior",
      last_name: "McElroy",
      family_id: "polly",
    },
    {
      ...BASE_GUEST,
      first_name: "Paul",
      last_name: "McElroy",
      family_id: "polly",
    },

    {
      ...BASE_GUEST,
      first_name: "Mark",
      last_name: "McElroy",
      family_id: "marksue",
    },
    {
      ...BASE_GUEST,
      first_name: "Sue",
      last_name: "McElroy",
      family_id: "marksue",
    },
    {
      ...BASE_GUEST,
      first_name: "Lilly",
      last_name: "McElroy",
      family_id: "marksue",
    },
    {
      ...BASE_GUEST,
      first_name: "Rosie",
      last_name: "McElroy",
      family_id: "marksue",
      is_kid: 1,
    },

    {
      ...BASE_GUEST,
      first_name: "Mike",
      last_name: "Singleton",
      family_id: "mikeelly",
    },
    {
      ...BASE_GUEST,
      first_name: "Elly",
      last_name: "Tyler",
      family_id: "mikeelly",
    },

    {
      ...BASE_GUEST,
      first_name: "Robert",
      last_name: "Deal",
      family_id: "robnadia",
    },
    {
      ...BASE_GUEST,
      first_name: "Nadia",
      last_name: "Ahkhtar",
      family_id: "robnadia",
    },

    {
      ...BASE_GUEST,
      first_name: "Peter",
      last_name: "Dyer",
      family_id: "gemmapete",
    },
    {
      ...BASE_GUEST,
      first_name: "Gemma",
      last_name: "Dyer",
      family_id: "gemmapete",
    },
    {
      ...BASE_GUEST,
      first_name: "Margot",
      last_name: "Dyer",
      family_id: "gemmapete",
      high_chair: 1,
      is_kid: 1,
    },
    {
      ...BASE_GUEST,
      first_name: "Arthur",
      last_name: "Dyer",
      family_id: "gemmapete",
      high_chair: 1,
      is_kid: 1,
    },

    {
      ...BASE_GUEST,
      first_name: "Sylvie",
      last_name: "Haffner",
      family_id: "sylvie",
    },

    {
      ...BASE_GUEST,
      first_name: "Alex",
      last_name: "Green-Wilkes",
      family_id: "alexandrew",
    },
    {
      ...BASE_GUEST,
      first_name: "Andrew",
      last_name: "Wescott",
      family_id: "alexandrew",
    },
    {
      ...BASE_GUEST,
      first_name: "Rory",
      last_name: "Wescott",
      family_id: "alexandrew",
      high_chair: 1,
      is_kid: 1,
    },
  ];

  const DATA_BEl = [
    {
      ...BASE_GUEST,
      first_name: "Eva",
      last_name: "Brohde Leung",
      family_id: "eva",
    },

    {
      ...BASE_GUEST,
      first_name: "Dianne",
      last_name: "Molinaro",
      family_id: "dandg",
    },
    {
      ...BASE_GUEST,
      first_name: "Giuseppe",
      last_name: "Molinaro",
      family_id: "dandg",
    },

    {
      ...BASE_GUEST,
      first_name: "Paul-André",
      last_name: "Jaimes",
      family_id: "brookpollo",
    },
    {
      ...BASE_GUEST,
      first_name: "Brooke",
      last_name: "Jaimes",
      family_id: "brookpollo",
    },
    {
      ...BASE_GUEST,
      first_name: "Natalie",
      last_name: "Jaimes",
      family_id: "brookpollo",
      high_chair: 1,
      is_kid: 1,
    },
    {
      ...BASE_GUEST,
      first_name: "Theodore",
      last_name: "Jaimes",
      family_id: "brookpollo",
      high_chair: 1,
      is_kid: 1,
    },

    {
      ...BASE_GUEST,
      first_name: "Noppadol",
      last_name: "Wattanaumphaipong",
      family_id: "nop",
    },

    {
      ...BASE_GUEST,
      first_name: "Chun",
      last_name: "Yik Lim",
      family_id: "chun",
    },

    {
      ...BASE_GUEST,
      first_name: "James",
      last_name: "Huynh",
      family_id: "james",
    },

    {
      ...BASE_GUEST,
      first_name: "Steve",
      last_name: "Gee",
      family_id: "steveg",
    },

    {
      ...BASE_GUEST,
      first_name: "Joanna",
      last_name: "Leung",
      family_id: "joleung",
    },

    {
      ...BASE_GUEST,
      first_name: "Thomas",
      last_name: "Lam",
      family_id: "tomlam",
    },
    {
      ...BASE_GUEST,
      first_name: "Eszter",
      last_name: "Kulcsar",
      family_id: "tomlam",
    },

    {
      ...BASE_GUEST,
      first_name: "Vinh",
      last_name: "Nguyen",
      family_id: "vinmag",
    },
    {
      ...BASE_GUEST,
      first_name: "Maggie",
      last_name: "Nguyen",
      family_id: "vinmag",
    },
    {
      ...BASE_GUEST,
      first_name: "Harrison",
      last_name: "Nguyen",
      family_id: "vinmag",
      high_chair: 1,
      is_kid: 1,
    },

    {
      ...BASE_GUEST,
      first_name: "Stephen",
      last_name: "Leong",
      family_id: "steanna",
    },
    {
      ...BASE_GUEST,
      first_name: "Anna",
      last_name: "Jurajdová",
      family_id: "steanna",
    },

    {
      ...BASE_GUEST,
      first_name: "Tom",
      last_name: "Tang",
      family_id: "tommolly",
    },
    {
      ...BASE_GUEST,
      first_name: "Molly",
      last_name: "Tang",
      family_id: "tommolly",
    },

    {
      ...BASE_GUEST,
      first_name: "Steve",
      last_name: "Tang",
      family_id: "stevetang",
    },
    {
      ...BASE_GUEST,
      first_name: "Lenna",
      last_name: "Tang",
      family_id: "stevetang",
    },
    {
      ...BASE_GUEST,
      first_name: "Ethan",
      last_name: "Tang",
      family_id: "stevetang",
      is_kid: 1,
    },
    {
      ...BASE_GUEST,
      first_name: "Hailey",
      last_name: "Tang",
      family_id: "stevetang",
      is_kid: 1,
    },

    {
      ...BASE_GUEST,
      first_name: "Anthony",
      last_name: "Tang",
      family_id: "antheva",
    },
    {
      ...BASE_GUEST,
      first_name: "Eva",
      last_name: "Tang",
      family_id: "antheva",
    },
    {
      ...BASE_GUEST,
      first_name: "Travis",
      last_name: "Tang",
      family_id: "antheva",
      is_kid: 1,
    },
    {
      ...BASE_GUEST,
      first_name: "Owen",
      last_name: "Tang",
      family_id: "antheva",
      is_kid: 1,
    },

    {
      ...BASE_GUEST,
      first_name: "Robert",
      last_name: "Tsu",
      family_id: "robnina",
    },
    {
      ...BASE_GUEST,
      first_name: "Nina",
      last_name: "Sun",
      family_id: "robnina",
    },

    {
      ...BASE_GUEST,
      first_name: "Ovid",
      last_name: "Cheung",
      family_id: "ovidjulia",
    },
    {
      ...BASE_GUEST,
      first_name: "Julia",
      last_name: "Cheung",
      family_id: "ovidjulia",
    },
  ];

  const createId = (idx: string) => {
    return (parseInt(idx) + Date.now()).toString();
  };

  const DATA = [...DATA_KEV, ...DATA_BEl];

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
