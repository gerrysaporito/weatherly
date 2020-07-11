import * as express from "express";
import {
  get_weather_one_city,
  get_weather_many_cities,
} from "../handlers/weather";

const router = express.Router();

// Routing
router.get("/one/:unit/:city", get_weather_one_city);
router.get("/many/:unit/:cities", get_weather_many_cities);

module.exports = router;
