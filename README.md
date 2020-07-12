# SwiftRide Weather API

## Background

<p>
This is a technical task from <strong>SwiftRide</strong> to create an api which retrieves weather data from an external source, <a href='http://api.openweathermap.org/' target="_blank">openweathermap.org</a>.
</p>

<p>
The goal is to create GET API endpoints to retrieve weather data from:<br>
<ul>
<li>A single city</li>
<li>Multiple cities</li>
</ul>

## Getting Started

<p>
The API is hosted on heroku, so to use it make a request to <a href='swiftride-weather-api.herokuapp.com' target="_blank">swiftride-weather-api.herokuapp.com</a>.
</p>

<p>
There are 3 parameters to modify to help you find what you're looking for: the scale, number, and city (cities). 
</p>

<p>The first parameter is the number of cities you want to get data for. One endpoint will return data from 1 city and the other will return data from multiple cities. The diffrent endpoints will return data in different formats.
</p>
<ul>
<li><strong>one</strong> - Data for a single (1) city</li>
<li><strong>many</strong> - Data for multiple (1+) cities</li>
</ul>

<p>
The second parameter is the scale you want the temperature to be returned in. Specifying the scale will define what unit of temperature measurement to use. Currently there are 3 scales: 
</p>
<ul>
<li><strong>c</strong> - Celsius</li>
<li><strong>f</strong> - Farenheit</li>
<li><strong>k</strong> - Kelvin</li>
</ul>

<p>
The last parameter is the city (or cities) you want the data from. the first parameter first parameter (<i>one</i> or <i>many</i>) dictates how many cities you can choose, whether it'd be 1 or or multiple.
</p>
<ul>
<li>If you chose <strong>one</strong> as your first parameter you can enter 1 city to search</li>
<li>If you chose <strong>many</strong> as your first parameter you can enter 1 or more cities to search</li>
</ul>
<p>
Some notes about this 3rd parameter:
</p>
<ul>
<li>Spaces in words will have to be replaced with <strong>%20</strong></li>
<li>Seperate more than 1 city with <strong>commas</strong></li>
</ul>

<p>Here is a template:</p>
<p><strong><a href="https://github.com/gksapori/swiftride-weather-api#example-requests" target="_blank">https://swiftride-weather-api.herokuapp.com/api/weather/{first}/{second}/{third}</a><strong></p>

## Example Requests

<ul>
<li><a href="https://swiftride-weather-api.herokuapp.com/api/weather/many/f/toronto" target="_blank">https://swiftride-weather-api.herokuapp.com/api/weather/many/f/toronto</a></li>
<li><a href="https://swiftride-weather-api.herokuapp.com/api/weather/many/c/toronto,ottawa,kingston" target="_blank">https://swiftride-weather-api.herokuapp.com/api/weather/many/c/toronto,ottawa,kingston</a></li>
<li><a href="https://swiftride-weather-api.herokuapp.com/api/weather/one/k/Niagara%20Falls" target="_blank">https://swiftride-weather-api.herokuapp.com/api/weather/one/k/Niagara%20Falls</a></li>
</ul>
