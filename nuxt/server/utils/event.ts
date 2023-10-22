import { db } from "./db.js";
import { generateRandomString } from "lucia/utils";
import { ID_LENGTH } from "@/consts/index.js";

export const createEventId = async (userId: string | null) => {
  const eventData = {
    id: generateRandomString(ID_LENGTH),
    user_id: userId,
    created_at: Date.now(),
    updated_at: Date.now(),
  };

  try {
    await db
      .insertInto("event_data")
      .values(eventData)
      .executeTakeFirstOrThrow();

    return eventData;
  } catch (e) {
    throw new Error("Cannot create Event Id");
  }
};
