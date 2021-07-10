"use strict";
require("dotenv").config();
module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  entities: ["dist/src/entities/*.js"],
  migrations: ["dist/src/database/migrations/*.js"],
  cli: {
    entitiesDir: "dist/src/entities",
    migrationsDir: "dist/src/database/migrations",
  },
};
