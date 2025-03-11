import path from "node:path";
import fs from "node:fs";
import dotenv from "dotenv";

const envPath = path.join(
  path.dirname(path.dirname(import.meta.dirname)),
  ".env"
);
if (!fs.existsSync(envPath)) {
  throw new Error(`Env file not found! ${envPath}`);
}

dotenv.config({
  path: envPath,
});

const isDevelopment = process.env.NODE_ENV;

export const appConfig = {
  MONGO_URI: process.env.MONGODB_URI ?? "",
  isDevelopment,
};
