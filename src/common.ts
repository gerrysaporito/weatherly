export interface ProcessEnv {
  [key: string]: string | undefined;
}

interface forecast {
  day: string;
  date: string;
  high: number;
  low: number;
}

export interface SingleCityResponse {
  city_name: string;
  unit: string;
  forecast: forecast;
}

export interface ManyCityResponse {
  cities: Array<string>;
  date: string;
  unit: string;
  average_high: number;
  average_low: number;
}
