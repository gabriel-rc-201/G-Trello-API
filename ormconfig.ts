require("dotenv").config();
module.exports = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  synchronize: true,
  logging: false,
  entities: ["src/entities/*.ts"],
  migrations: ["src/database/migrations/*.ts"],
  cli: {
    entitiesDir: "src/entities",
    migrationsDir: "src/database/migrations",
  },
};
