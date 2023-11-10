import { migrate } from "sqlite-migrator";
import { resolve } from "path";

console.log("INSIDE");

migrate({
  dbPath: resolve(__dirname, "./database.sqlite"),
  migrationDir: resolve(__dirname, "./migrations"),
});
