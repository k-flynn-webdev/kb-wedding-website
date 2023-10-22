import { db } from "./db.js";
import { generateRandomString } from "lucia/utils";
import { ID_LENGTH } from "@/consts/index.js";

export const createPlace = async (userId: string | null, eventId: string) => {
  const placeData = {
    id: generateRandomString(ID_LENGTH),
    user_id: userId,
    event_id: eventId,
    created_at: Date.now(),
    updated_at: Date.now(),
  };

  try {
    await db
      .insertInto("place_data")
      .values(placeData)
      .executeTakeFirstOrThrow();

    return placeData;
  } catch (e) {
    throw new Error("Cannot create Place Id");
  }
};
