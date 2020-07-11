import axios from "axios";
import { OPEN_WEATHER_MAP_API_KEY } from "../utils/config";
import { SingleCityResponse, ManyCityResponse } from "../common";

export async function get_weather_one_city(req: any, res: any, next: any) {
  try {
    let city: string = req.params.city;
    let query: string = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_MAP_API_KEY}`;

    let response: SingleCityResponse = {
      city_name: "string",
      unit: "string",
      forecast: {
        day: "string",
        date: "string",
        high: 0,
        low: 0,
      },
    };
    return res.status(200).json({ response });
  } catch (e) {
    return next({
      error: e,
      API_KEY: OPEN_WEATHER_MAP_API_KEY,
    });
  }
}

export async function post_weather_one_city(req: any, res: any, next: any) {
  try {
    let city: string = req.body.city;
    let query: string = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_MAP_API_KEY}`;

    let response: SingleCityResponse = {
      city_name: "string",
      unit: "string",
      forecast: {
        day: "string",
        date: "string",
        high: 0,
        low: 0,
      },
    };
    return res.status(200).json(response);
  } catch (e) {
    return next(e);
  }
}

export async function get_weather_many_cities(req: any, res: any, next: any) {
  try {
    let cities: Array<string> = req.params.cities.split(",");

    let response: ManyCityResponse = {
      cities: [],
      date: "string",
      unit: "string",
      average_high: 0,
      average_low: 0,
    };

    return res.status(200).json(response);
  } catch (e) {
    return next(e);
  }
}

export async function post_weather_many_cities(req: any, res: any, next: any) {
  try {
    let cities: Array<string> = req.body.cities;

    let response: ManyCityResponse = {
      cities: [],
      date: "string",
      unit: "string",
      average_high: 0,
      average_low: 0,
    };

    return res.status(200).json(response);
  } catch (e) {
    return next(e);
  }
}
