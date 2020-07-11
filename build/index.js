"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Packages
var express = require("express");
var cors = require("cors");
var body_parser = require("body-parser");
var ssl_redirect = require("heroku-ssl-redirect");
// Routes
var error_1 = require("./handlers/error");
var WEATHER_ROUTES = require("./handlers/weather_routes");
// Variables
var config_1 = require("./utils/config");
var ENV_PORT = config_1.PORT || 5000;
var app = express();
app.use(ssl_redirect());
app.use(cors());
app.use(body_parser.json());
// ROUTES
app.use("/api/weather", WEATHER_ROUTES);
app.use(function (req, res, next) {
    var err = new Error("Not Found.");
    err.status = 404;
    err.info = {};
    next(err);
});
app.use(error_1.default);
//starting server
app.listen(ENV_PORT, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
