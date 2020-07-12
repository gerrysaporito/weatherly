import axios from "axios";
import { OPEN_WEATHER_MAP_API_KEY } from "../utils/config";
import { SingleCityResponse, ManyCityResponse, DateTypes } from "../common";
import { Units } from "../definitions";
import {
  get_date,
  get_temp_from_units,
  get_average,
} from "../middleware/helpers";

/* @description: Get weather information for 1 city.
 *
 * @params: req (Object)
 * @params: res (Object)
 * @params: next (Function)
 * @return Object
 */
export async function get_weather_one_city(req: any, res: any, next: any) {
  try {
    let city: string = req.params.city;
    let unit: string = req.params.unit.toLowerCase();

    // Error checking for unit.
    if (Object.keys(Units).indexOf(unit) == -1) {
      let msg = `Scale unit '${unit}' not found. Please choose either c (Celsius), f (Farenheit), or k (Kelvin).`;
      return res.json({
        status: 401,
        message: msg,
      });
    }

    // Request
    let query: string = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_MAP_API_KEY}`;
    let raw_response = await axios.get(query).catch((err) => {
      let msg = `City named '${city}' not found. Please check the city name again.`;
      return res.json({
        status: 401,
        message: msg,
      });
    });
    let data = raw_response.data;

    // Converts temperature to reflect proper unit if needed.
    let temp_max = get_temp_from_units(data.main.temp_max, Units[unit]);
    let temp_min = get_temp_from_units(data.main.temp_min, Units[unit]);

    // Response
    let response: SingleCityResponse = {
      city_name: data.name,
      unit: Units[unit],
      forecast: {
        day: get_date(DateTypes.DayOfWeek),
        date: get_date(DateTypes.Date),
        high: temp_max,
        low: temp_min,
      },
    };

    return res.status(200).json(response);
  } catch (e) {
    return next(e);
  }
}

/* @description: Gets weather information for multiple cities.
 *
 * @params: req (Object)
 * @params: res (Object)
 * @params: next (Function)
 * @return Object
 */
export async function get_weather_many_cities(req: any, res: any, next: any) {
  try {
    let search_cities: Array<string> = req.params.cities.split(",");
    let unit: string = req.params.unit.toLowerCase();
    let cities: Array<string> = [];
    let temp_max_array: Array<number> = [];
    let temp_min_array: Array<number> = [];

    // Error checking for unit.
    if (Object.keys(Units).indexOf(unit) == -1) {
      let msg = `Scale unit '${unit}' not found. Please choose either c (Celsius), f (Farenheit), or k (Kelvin).`;
      return res.json({
        status: 401,
        message: msg,
      });
    }

    // Makes requests for each city and sorts information.
    for (let city of search_cities) {
      // Request
      let query: string = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_MAP_API_KEY}`;
      let raw_response = await axios.get(query).catch((err) => {
        let msg = `City named '${city}' not found. Please check the city name again.`;
        return res.json({
          status: 401,
          message: msg,
        });
      });
      let data = raw_response.data;

      cities.push(data.name);
      temp_max_array.push(data.main.temp_max);
      temp_min_array.push(data.main.temp_min);
    }

    // Converts temperature to reflect proper unit if needed.
    let temp_max = get_temp_from_units(
      get_average(temp_max_array),
      Units[unit]
    );
    let temp_min = get_temp_from_units(
      get_average(temp_min_array),
      Units[unit]
    );

    // Response
    let response: ManyCityResponse = {
      cities: cities,
      date: get_date(DateTypes.Date),
      unit: Units[unit],
      average_high: temp_max,
      average_low: temp_min,
    };

    return res.status(200).json(response);
  } catch (e) {
    return next(e);
  }
}
