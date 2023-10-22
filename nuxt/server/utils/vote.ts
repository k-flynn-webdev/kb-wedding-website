import { db } from "./db.js";
import { generateRandomString } from "lucia/utils";
import { ID_LENGTH } from "@/consts/index";

export const transformVote = (list: Array) => {
  return list.map((item) => {
    return {
      ...item,
      vote: !!item.vote,
    };
  });
};

export const createVote = async (
  userId: string | null,
  eventId: string,
  placeId: string,
  dateTimeId: string | null,
  vote: Boolean
) => {
  const voteData = {
    id: generateRandomString(ID_LENGTH),
    user_id: userId,
    event_id: eventId,
    place_id: placeId,
    date_time_id: dateTimeId,
    vote: vote ? 1 : 0,
    created_at: Date.now(),
    updated_at: Date.now(),
  };

  try {
    return await db
      .insertInto("vote_data")
      .values(voteData)
      .executeTakeFirstOrThrow()
      .then(() => transformVote([voteData]));
  } catch (e) {
    throw new Error("Cannot create Vote Data");
  }
};
