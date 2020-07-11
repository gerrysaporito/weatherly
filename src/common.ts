// Type of dates needed.
export enum DateTypes {
  DayOfWeek,
  Date,
}

// Defines the .env configuration.
export interface ProcessEnv {
  [key: string]: string | undefined;
}

// Interface used in SingleCityResponse.
interface forecast {
  day: string;
  date: string;
  high: number;
  low: number;
}

// Defines the response for a single city.
export interface SingleCityResponse {
  city_name: string;
  unit: string;
  forecast: forecast;
}

// Defines the response for multiple cities.
export interface ManyCityResponse {
  cities: Array<string>;
  date: string;
  unit: string;
  average_high: number;
  average_low: number;
}
