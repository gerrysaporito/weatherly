"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_average = exports.get_date = exports.get_temp_from_units = exports.kelvin_to_fahrenheit = exports.kelvin_to_celsius = void 0;
const common_1 = require("../common");
const definitions_1 = require("../definitions");
/*
 * @description: Convert temperatures from kelvin to celsius, to 1 decimal place.
 *
 * @param: temp (number)
 * @return number
 */
exports.kelvin_to_celsius = (temp) => {
    return Math.round((temp - 273) * 10) / 10;
};
/*
 * @description: Convert temperatures from kelvin to farenheit, to 1 decimal place.
 *
 * @param: temp (number)
 * @return number
 */
exports.kelvin_to_fahrenheit = (temp) => {
    return Math.round(((temp * 9) / 5 - 459.67) * 10) / 10;
};
/*
 * @description: Will convert a temperature from kelvin to whichever units are requested.
 *
 * @param: temp (number)
 * @param: unit (string)
 * @return number
 */
exports.get_temp_from_units = (temp, unit) => {
    let new_temp = temp;
    switch (unit) {
        case definitions_1.Units.c: {
            new_temp = exports.kelvin_to_celsius(temp);
            break;
        }
        case definitions_1.Units.f: {
            new_temp = exports.kelvin_to_fahrenheit(temp);
            break;
        }
        default: {
            break;
        }
    }
    return new_temp;
};
/*
 * @description: Return today's date.
 * This can return either:
 *     - Day of the week
 *     - Full date (Format: Month date, year)
 *
 * @param: type (Datetypes)
 * @return string
 */
exports.get_date = (type) => {
    let return_date = "";
    let date = new Date();
    let day = definitions_1.weekdays[date.getDay()];
    let month = definitions_1.months[date.getMonth()];
    let date_of_month = date.getDate();
    let year = date.getFullYear();
    switch (type) {
        case common_1.DateTypes.Date: {
            return_date = `${month} ${date_of_month}, ${year}`;
            break;
        }
        case common_1.DateTypes.DayOfWeek: {
            return_date = day;
            break;
        }
        default: {
            break;
        }
    }
    return return_date;
};
/*
 * @description: Return the average of an array of numbers, to 1 decimal place.
 *
 * @param: temp(number)
 * @return number
 */
exports.get_average = (numbers) => {
    let sum = 0;
    for (let n of numbers) {
        sum += n;
    }
    return Math.round((sum / numbers.length) * 10) / 10;
};
