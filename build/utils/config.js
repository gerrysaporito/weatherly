"use strict";
// Responsible for initilaizing environment variables.
Object.defineProperty(exports, "__esModule", { value: true });
exports.OPEN_WEATHER_MAP_API_KEY = exports.PORT = void 0;
const dotenv = require("dotenv");
let path = `${__dirname}/../../.env`;
dotenv.config({ path: path });
exports.PORT = process.env.PORT;
exports.OPEN_WEATHER_MAP_API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY;
