import { transformVote } from "@/server/utils/vote";
// todo protect the fields
const allowedUpdatedFields = ["vote"];

export default defineEventHandler(async (event) => {
  const authRequest = auth.handleRequest(event);
  const session = await authRequest.validate();

  const body = await readBody(event);

  const allowedEdit = {
    vote: body.vote ? 1 : 0,
    updated_at: Date.now(),
  };

  try {
    const result = await db
      .updateTable("vote_data")
      .set({ ...allowedEdit })
      .where("id", "=", event?.context?.params?.id)
      .where("user_id", "=", session?.user?.userId)
      .executeTakeFirst();

    if (!result.numUpdatedRows) throw "No row updated";

    return await db
      .selectFrom("vote_data")
      .selectAll()
      .where("id", "=", event?.context?.params?.id)
      .where("user_id", "=", session?.user?.userId)
      .execute()
      .then((data) => transformVote(data));
  } catch (e) {
    throw createError({
      status: 400,
      message: "Vote Error",
    });
  }
});
