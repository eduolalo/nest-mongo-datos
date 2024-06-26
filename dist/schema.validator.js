"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaValidator = void 0;
const Joi = require("joi");
exports.SchemaValidator = Joi.object({
    PORT: Joi.string().required(),
    MONGO_DB_NAME: Joi.string().required(),
    MONGO_PASSWORD: Joi.string().required(),
    MONGO_USERNAME: Joi.string().required(),
    MONGO_PORT: Joi.string().required(),
    MONGO_URL: Joi.string().required(),
});
//# sourceMappingURL=schema.validator.js.map