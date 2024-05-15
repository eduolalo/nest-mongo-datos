import { ConfigType } from "@nestjs/config";
import { Db } from "mongodb";
import config from "./config";
export declare class AppService {
    private database;
    private configService;
    constructor(database: Db, configService: ConfigType<typeof config>);
    getHello(): string;
    getTasks(): Promise<import("mongodb").WithId<import("bson").Document>[]>;
}
