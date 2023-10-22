import { db } from "./db.js";
import { generateRandomString } from "lucia/utils";
import { ID_LENGTH } from "@/consts/index.js";

export const createDateTime = async (
  userId: string | null,
  eventId: string,
  placeId: string
) => {
  const dateTimeData = {
    id: generateRandomString(ID_LENGTH),
    user_id: userId,
    event_id: eventId,
    place_id: placeId,
    created_at: Date.now(),
    updated_at: Date.now(),
  };

  try {
    await db
      .insertInto("date_time_data")
      .values(dateTimeData)
      .executeTakeFirstOrThrow();

    return dateTimeData;
  } catch (e) {
    throw new Error("Cannot create Date Time Data");
  }
};
