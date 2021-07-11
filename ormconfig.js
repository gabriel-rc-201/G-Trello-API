require("dotenv").config();
module.exports = {
  type: "postgres",
  url: "postgres://mlwarphwlittum:e9ce8b200886a6c1f699f4a72317455159633f3ea1f0fc7ed978df8ce0f5b6f3@ec2-3-226-134-153.compute-1.amazonaws.com:5432/d2o6luhsa02dqd",
  synchronize: true,
  logging: false,
  entities: ["src/entities/*.js"],
  migrations: ["src/database/migrations/*.js"],
  cli: {
    entitiesDir: "src/entities",
    migrationsDir: "src/database/migrations",
  },
};
