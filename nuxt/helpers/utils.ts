import { readFile } from "fs";

export const readLocaFile = (filePath: string) => {
  return new Promise(function (resolve, reject) {
    readFile(filePath, "utf8", function (error, contents) {
      if (error) reject(error);
      else resolve(contents);
    });
  });
};
