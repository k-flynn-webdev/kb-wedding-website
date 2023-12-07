import { readFile } from "fs";
import { H3Event } from "h3";

export const readLocaFile = (filePath: string) => {
  return new Promise(function (resolve, reject) {
    readFile(filePath, "utf8", function (error, contents) {
      if (error) reject(error);
      else resolve(contents);
    });
  });
};

export const gateAPIAdminPassword = (event: H3Event) => {
  const config = useRuntimeConfig();

  const { user, password } = config.admin;

  if (!user) {
    throw createError("Missing User");
  }

  if (!password) {
    throw createError("Missing User Password");
  }

  if (
    event?.context?.params?.user === user &&
    event?.context?.params?.password === password
  ) {
    return true;
  }

  throw createError("Incorrect User Password");
};
