// learn-cicd-typescript-starter/src/config.ts

import dotenv from "dotenv";
import process from "node:process";

dotenv.config();

type Config = {
  db: DBConfig;
  api: APIConfig;
};

type APIConfig = {
  port: string | undefined;
  filepathRoot: string;
};

type DBConfig = {
  url: string | undefined;
};

console.log('Hello', process.env.PORT);
console.log('Hello', process.env.DATABASE_URL);


export const config: Config = {
  api: {
    port: process.env.PORT,
    filepathRoot: "./src/assets",
  },
  db: {
    url: process.env.DATABASE_URL,
  },
};
