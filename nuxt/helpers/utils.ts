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

export const gateAPISecretId = (event: H3Event) => {
  const config = useRuntimeConfig();

  if (!config.secretId) {
    throw createError("Missing Admin Id");
  }

  if (event?.context?.params?.secretId !== config.secretId) {
    throw createError("DENIED");
  }
};
