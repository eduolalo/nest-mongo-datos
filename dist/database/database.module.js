"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const mongodb_1 = require("mongodb");
const API_KEY = "12345634";
const API_KEY_PROD = "PROD1212121SA";
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [
            {
                provide: "API_KEY",
                useValue: process.env.NODE_ENV === "prod" ? API_KEY_PROD : API_KEY,
            },
            {
                provide: "MONGO",
                useFactory: async () => {
                    const client = new mongodb_1.MongoClient(process.env.MONGO_URL);
                    await client.connect();
                    return client.db(process.env.MONGO_DB_NAME);
                },
            },
        ],
        exports: ["API_KEY", "MONGO"],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map