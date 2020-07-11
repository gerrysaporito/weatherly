"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
const ssl_redirect = require("heroku-ssl-redirect");
const weather_1 = require("./routes/weather");
const error_1 = require("./handlers/error");
const config_1 = require("./utils/config");
let ENV_PORT = config_1.PORT || 5000;
let app = express();
app.use(ssl_redirect());
app.use(cors());
app.use(body_parser.json());
// Routes.
app.use("/api/weather", weather_1.default);
app.use(function (req, res, next) {
    let err = new Error("Not Found.");
    err.status = 404;
    err.info = {};
    next(err);
});
app.use(error_1.default);
// Starting Server.
app.listen(ENV_PORT, function () {
    let port = this.address().port;
    let env = app.settings.env;
    console.log(`Express server listening on port ${port} in ${env} mode.`);
});
