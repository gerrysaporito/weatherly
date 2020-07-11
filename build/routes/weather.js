"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const weather_1 = require("../handlers/weather");
const WEATHER_ROUTES = express.Router();
// Routing
WEATHER_ROUTES.get("/one/:unit/:city", weather_1.get_weather_one_city);
WEATHER_ROUTES.get("/many/:unit/:cities", weather_1.get_weather_many_cities);
exports.default = WEATHER_ROUTES;
