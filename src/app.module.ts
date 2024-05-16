import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule, ConfigType } from "@nestjs/config";
import { Module } from "@nestjs/common";

import { DatabaseModule } from "./database/database.module";
import { SchemaValidator } from "./schema.validator";
import { UsersModule } from "./users/users.module";
import { AppController } from "./app.controller";
import { enviroments } from "./environments";
import { AppService } from "./app.service";
import config from "./config";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || ".env",
      load: [config],
      isGlobal: true,
      validationSchema: SchemaValidator,
    }),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigType<typeof config>) => {
        const { url, name } = configService.mongo;
        return { uri: url, dbName: name };
      },
      inject: [config.KEY],
    }),
    UsersModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseModule],
})
export class AppModule {}
