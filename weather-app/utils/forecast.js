const request = require("request");
const APIKey = require("../api_keys.js");
const chalk = require("chalk");

const forecast = ({ latitude, longitude, location }, callback) => {
  const darkSkyURL = `https://api.darksky.net/forecast/${APIKey.darkSkyAPI}/${latitude},${longitude}`;

  request({ url: darkSkyURL, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      const unix_time = response.body.currently.time;
      const dateObject = new Date(unix_time * 1000);
      const time = dateObject.toUTCString();
      callback(
        undefined,
        chalk.cyan.inverse(
          `Forecast overview for ${location} on ${time}: It is currently ${response.body.currently.temperature} degrees out. ${response.body.daily.data[0].summary} There is a ${response.body.currently.precipProbability}% chance of rain.`
        )
      );
    }
  });
};

module.exports = forecast;
