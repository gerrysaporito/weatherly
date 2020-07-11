import * as express from "express";
import {
  get_weather_one_city,
  get_weather_many_cities,
} from "../handlers/weather";

const WEATHER_ROUTES = express.Router();

// Routing
WEATHER_ROUTES.get("/one/:unit/:city", get_weather_one_city);
WEATHER_ROUTES.get("/many/:unit/:cities", get_weather_many_cities);

export default WEATHER_ROUTES;
