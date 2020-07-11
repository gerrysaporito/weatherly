"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = void 0;
var dotenv = require("dotenv");
dotenv.config();
var path = __dirname + "/../../.env.test";
dotenv.config({ path: path });
exports.PORT = process.env.PORT;
