require("dotenv").config();
module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  entities: ["src/entities/*.js"],
  migrations: ["src/database/migrations/*.js"],
  cli: {
    entitiesDir: "src/entities",
    migrationsDir: "src/database/migrations",
  },
};
