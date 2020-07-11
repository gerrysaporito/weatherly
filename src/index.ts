import * as express from "express";
import * as cors from "cors";
import * as body_parser from "body-parser";
import * as ssl_redirect from "heroku-ssl-redirect";
import * as WEATHER_ROUTES from "./routes/weather";
import ERROR_HANDLER from "./handlers/error";
import { PORT } from "./utils/config";

let ENV_PORT = PORT || 5000;
let app = express();

app.use(ssl_redirect());
app.use(cors());
app.use(body_parser.json());

// Routes.
app.use("/api/weather", WEATHER_ROUTES);

app.use(function (req, res, next) {
  let err: any = new Error("Not Found.");
  err.status = 404;
  err.info = {};
  next(err);
});
app.use(ERROR_HANDLER);

// Starting Server.
app.listen(ENV_PORT, function () {
  let port: number = this.address().port;
  let env: string = app.settings.env;
  console.log(`Express server listening on port ${port} in ${env} mode.`);
});
