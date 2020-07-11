// Responsible for initilaizing environment variables.

import * as dotenv from "dotenv";

let path = `${__dirname}/../../.env`;

dotenv.config({ path: path });

export const PORT = process.env.PORT;
export const OPEN_WEATHER_MAP_API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY;
