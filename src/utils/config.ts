import * as dotenv from "dotenv";

dotenv.config();

let path = `${__dirname}/../../.env.test`;

dotenv.config({ path: path });

export const PORT = process.env.PORT;
export const OPEN_WEATHER_MAP_API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY;
