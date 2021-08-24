# Weather API

## Introduction 🎩

This is an api that allows users to query weather data from [openweathermap.org](http://api.openweathermap.org/).
**This api is run on a free heroku server so the first request will take a few seconds to load (Heroku has to start up the server).**

## Description 📝

This api is used to query weather data and was used to learn more about Typescript. Although simple by design, the implmentation forced me to enforce DRY (don't repeat yourself) and type-safe design.

### Learning Experience 📚

This project gave me a chance to work with new technologies including:

- [Typescript](https://www.typescriptlang.org/)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/) (typed)

This project also taught me more about:

- DRY Principles
- Type-safe design

## Getting Started 🏁

### Requirements ✅

- Node & npm

### Installation 💾

1. Download this repository
2. Sign up on [openweathermap.org](http://api.openweathermap.org/) and get your api key.
3. Rename `.env.example` -> `.env` and fill out the information
4. Open a command line window, navigate to this repository & run `npm run start`
5. Go to [http://localhost:3000](http://localhost:3000)

### Notes 🖍

- If you try to open the url in chrome and you get a 'this connection is not safe', click anywhere on the page and type the phrase `thisisunsafe` to bypass security

## Features 🧩

This app has the following functionalities:

- Query temperature data for one or multiple cities
- Provide temperature in different units (Celsius, Farenheit, Kelvin)

### Query Parameters

You can query by making `GET` requests and following this template: `https://swiftride-weather-api.herokuapp.com/api/weather/{first}/{second}/{third}`.

#### First Parameter: Return Data Format

The first parameter is the number of cities you want to get data for. One endpoint will return data from 1 city and the other will return data from multiple cities. The diffrent endpoints will return data in different formats.

- `one` - Data for a single (1) city
- `many` - Data for multiple (1+) cities

#### Second Parameter: Temperature Unit

The second parameter is the scale you want the temperature to be returned in. Specifying the scale will define what unit of temperature measurement to use. There are currently 3 scales:

- `c` - Celsius
- `f` - Farenheit
- `k` - Kelvin

#### Third Parameter: Requested Cities

The last parameter is the city (or cities) you want the data from. the first parameter first parameter (one or many) dictates how many cities you can choose, whether it'd be 1 or or multiple.

- If you chose `one` as your first parameter you can enter 1 city to search
- If you chose `many` as your first parameter you can enter 1 or more cities to search

Some notes about this 3rd parameter:

- Spaces in words will have to be replaced with %20
- Seperate more than 1 city with commas

### Example Requests

- [https://swiftride-weather-api.herokuapp.com/api/weather/many/f/toronto](https://swiftride-weather-api.herokuapp.com/api/weather/many/f/toronto)
- [https://swiftride-weather-api.herokuapp.com/api/weather/many/c/toronto,ottawa,kingston](https://swiftride-weather-api.herokuapp.com/api/weather/many/c/toronto,ottawa,kingston)
- [https://swiftride-weather-api.herokuapp.com/api/weather/one/k/Niagara%20Falls](https://swiftride-weather-api.herokuapp.com/api/weather/one/k/Niagara%20Falls)

## Roadmap 🗺

This api has no testing or validation to ensure that it is functioning properly. That being said, in the future it would be great to have integration and unit tests performed to automate testing.

Aside from that, this api is basic and only queries basic temperature information and it would be interesting to see this expanded to more than just teperature. To be able to query precipitation amounts and humidity could give a more accurate temperature reading or even show weather on certain days. Aside from that, cleaning up the query to improve the developer experience would be nice to see.

## Edge Cases ⚠️

There isn't a lot going on in this api as it is mostly used as a tool to learn more about Typescript so there aren't many edge cases to cover. Below are some things to consider.

### Query validation 🚩

For one, there is no validation or sanitization on the query. This could cause problems for the developer as it is easy to make mistakes and there is no message to guide them through their troubles.

To help with this, a query validation middleware can be implemented to provide a detailed response to the user's issues.

### Notes 🖍

This is by no means an exhaustive list but only a few of the more critical points.
