import { DateTypes } from "../common";
export declare const kelvin_to_celsius: (temp: number) => number;
export declare const kelvin_to_fahrenheit: (temp: number) => number;
export declare const get_temp_from_units: (temp: number, unit: string) => number;
export declare const get_date: (type: DateTypes) => string;
export declare const get_average: (numbers: Array<number>) => number;
