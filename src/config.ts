import { registerAs } from "@nestjs/config";

export default registerAs("config", () => {
  return {
    database: {
      name: process.env.DATABASE_NAME,
      port: process.env.DATABASE_PORT,
    },
    mongo: {
      url: process.env.MONGO_URL,
      name: process.env.MONGO_DB_NAME,
    },
    apiKey: process.env.API_KEY,
  };
});
