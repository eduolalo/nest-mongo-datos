import * as Joi from "joi";

export const SchemaValidator = Joi.object({
  PORT: Joi.string().required(),
  MONGO_URL: Joi.string().uri().required(),
  MONGO_DB_NAME: Joi.string().required(),
});

// DATA_BASE_NAME=your_database_name
// DATA_BASE_PORT=your_database_port
// API_KEY=your_api_key
// PORT=your_port

// # MONGO
// MONGO_URL=mongodb://root:secretpass@localhost:27017
