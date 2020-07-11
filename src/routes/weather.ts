import * as express from "express";
import {
  get_weather_one_city,
  post_weather_one_city,
  get_weather_many_cities,
  post_weather_many_cities,
} from "../handlers/weather";

const router = express.Router();

router.get("/one/:city", get_weather_one_city);
router.post("/one/", post_weather_one_city);

router.get("/many/:cities", get_weather_many_cities);
router.post("/many", post_weather_many_cities);

module.exports = router;
