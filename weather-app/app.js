const chalk = require("chalk");
const request = require("request");
const APIKey = require("./api_keys.js");
const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

const address = process.argv[2];

if (!address) {
  return console.log("Please enter a location and try again", undefined);
} else {
  geocode(address, (geoError, geoData) => {
    if (geoError) {
      return console.log(geoError);
    }
    forecast(geoData, (forecastError, forecastData) => {
      if (forecastError) {
        return console.log(forecastError);
      }
      console.log(forecastData);
    });
  });
}
