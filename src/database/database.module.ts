import { Module, Global } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import { MongoClient } from "mongodb";

import config from "../config";

const API_KEY = "12345634";
const API_KEY_PROD = "PROD1212121SA";

@Global()
@Module({
  imports: [],
  providers: [
    {
      provide: "API_KEY",
      useValue: process.env.NODE_ENV === "prod" ? API_KEY_PROD : API_KEY,
    },
    {
      provide: "MONGO",
      useFactory: async (configService: ConfigType<typeof config>) => {
        const { url, name } = configService.mongo;
        const client = new MongoClient(url);
        await client.connect();
        return client.db();
      },
      inject: [config.KEY],
    },
  ],
  exports: ["API_KEY", "MONGO"],
})
export class DatabaseModule {}
