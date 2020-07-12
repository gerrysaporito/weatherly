"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_weather_many_cities = exports.get_weather_one_city = void 0;
const axios_1 = require("axios");
const config_1 = require("../utils/config");
const common_1 = require("../common");
const definitions_1 = require("../definitions");
const helpers_1 = require("../middleware/helpers");
/* @description: Get weather information for 1 city.
 *
 * @params: req (Object)
 * @params: res (Object)
 * @params: next (Function)
 * @return Object
 */
function get_weather_one_city(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let city = req.params.city;
            let unit = req.params.unit.toLowerCase();
            // Error checking for unit.
            if (Object.keys(definitions_1.Units).indexOf(unit) == -1) {
                let msg = `Scale unit '${unit}' not found. Please choose either c (Celsius), f (Farenheit), or k (Kelvin).`;
                return res.json({
                    status: 401,
                    message: msg,
                });
            }
            // Request
            let query = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config_1.OPEN_WEATHER_MAP_API_KEY}`;
            let raw_response = yield axios_1.default.get(query).catch((err) => {
                let msg = `City named '${city}' not found. Please check the city name again.`;
                return res.json({
                    status: 401,
                    message: msg,
                });
            });
            let data = raw_response.data;
            // Converts temperature to reflect proper unit if needed.
            let temp_max = helpers_1.get_temp_from_units(data.main.temp_max, definitions_1.Units[unit]);
            let temp_min = helpers_1.get_temp_from_units(data.main.temp_min, definitions_1.Units[unit]);
            // Response
            let response = {
                city_name: data.name,
                unit: definitions_1.Units[unit],
                forecast: {
                    day: helpers_1.get_date(common_1.DateTypes.DayOfWeek),
                    date: helpers_1.get_date(common_1.DateTypes.Date),
                    high: temp_max,
                    low: temp_min,
                },
            };
            return res.status(200).json(response);
        }
        catch (e) {
            return next(e);
        }
    });
}
exports.get_weather_one_city = get_weather_one_city;
/* @description: Gets weather information for multiple cities.
 *
 * @params: req (Object)
 * @params: res (Object)
 * @params: next (Function)
 * @return Object
 */
function get_weather_many_cities(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let search_cities = req.params.cities
                .split(",")
                .filter((city) => city != "");
            let unit = req.params.unit.toLowerCase();
            let cities = [];
            let temp_max_array = [];
            let temp_min_array = [];
            // Error checking for unit.
            if (Object.keys(definitions_1.Units).indexOf(unit) == -1) {
                let msg = `Scale unit '${unit}' not found. Please choose either c (Celsius), f (Farenheit), or k (Kelvin).`;
                return res.json({
                    status: 401,
                    message: msg,
                });
            }
            // Makes requests for each city and sorts information.
            for (let city of search_cities) {
                // Request
                let query = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config_1.OPEN_WEATHER_MAP_API_KEY}`;
                let raw_response = yield axios_1.default.get(query).catch((err) => {
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
            let temp_max = helpers_1.get_temp_from_units(helpers_1.get_average(temp_max_array), definitions_1.Units[unit]);
            let temp_min = helpers_1.get_temp_from_units(helpers_1.get_average(temp_min_array), definitions_1.Units[unit]);
            // Response
            let response = {
                cities: cities,
                date: helpers_1.get_date(common_1.DateTypes.Date),
                unit: definitions_1.Units[unit],
                average_high: temp_max,
                average_low: temp_min,
            };
            return res.status(200).json(response);
        }
        catch (e) {
            return next(e);
        }
    });
}
exports.get_weather_many_cities = get_weather_many_cities;
