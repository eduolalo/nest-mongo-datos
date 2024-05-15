import { Module, Global } from "@nestjs/common";
import { MongoClient } from "mongodb";

const API_KEY = "12345634";
const API_KEY_PROD = "PROD1212121SA";

@Global()
@Module({
  providers: [
    {
      provide: "API_KEY",
      useValue: process.env.NODE_ENV === "prod" ? API_KEY_PROD : API_KEY,
    },
    {
      provide: "MONGO",
      useFactory: async () => {
        const client = new MongoClient(process.env.MONGO_URL);
        await client.connect();
        return client.db(process.env.MONGO_DB_NAME);
      },
    },
  ],
  exports: ["API_KEY", "MONGO"],
})
export class DatabaseModule {}
