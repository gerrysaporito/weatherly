import { DateTypes } from "../common";
import { weekdays, months, Units } from "../definitions";

/*
 * @description: Convert temperatures from kelvin to celsius, to 1 decimal place.
 *
 * @param: temp (number)
 * @return number
 */
export const kelvin_to_celsius = (temp: number): number => {
  return Math.round((temp - 273) * 10) / 10;
};

/*
 * @description: Convert temperatures from kelvin to farenheit, to 1 decimal place.
 *
 * @param: temp (number)
 * @return number
 */
export const kelvin_to_fahrenheit = (temp: number): number => {
  return Math.round(((temp * 9) / 5 - 459.67) * 10) / 10;
};

/*
 * @description: Will convert a temperature from kelvin to whichever units are requested.
 *
 * @param: temp (number)
 * @param: unit (string)
 * @return number
 */
export const get_temp_from_units = (temp: number, unit: string): number => {
  let new_temp = temp;
  switch (unit) {
    case Units.c: {
      new_temp = kelvin_to_celsius(temp);
      break;
    }
    case Units.f: {
      new_temp = kelvin_to_fahrenheit(temp);
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
export const get_date = (type: DateTypes): string => {
  let return_date = "";
  let date = new Date();
  let day = weekdays[date.getDay()];
  let month = months[date.getMonth()];
  let date_of_month = date.getDate();
  let year = date.getFullYear();

  switch (type) {
    case DateTypes.Date: {
      return_date = `${month} ${date_of_month}, ${year}`;
      break;
    }
    case DateTypes.DayOfWeek: {
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
export const get_average = (numbers: Array<number>): number => {
  let sum = 0;
  for (let n of numbers) {
    sum += n;
  }
  return Math.round((sum / numbers.length) * 10) / 10;
};
