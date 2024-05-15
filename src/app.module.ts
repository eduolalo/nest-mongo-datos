import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";

import { DatabaseModule } from "./database/database.module";
import { AppController } from "./app.controller";
import { UsersModule } from "./users/users.module";
import { enviroments } from "./environments";
import { AppService } from "./app.service";
import { SchemaValidator } from "./schema.validator";
import config from "./config";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || ".env",
      load: [config],
      isGlobal: true,
      validationSchema: SchemaValidator,
    }),
    UsersModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
