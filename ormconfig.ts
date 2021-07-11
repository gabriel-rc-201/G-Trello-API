require("dotenv").config();
module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  entities: ["src/entities/*.ts"],
  migrations: ["src/database/migrations/*.ts"],
  cli: {
    entitiesDir: "src/entities",
    migrationsDir: "src/database/migrations",
  },
};
