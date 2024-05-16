"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)("config", () => {
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
//# sourceMappingURL=config.js.map