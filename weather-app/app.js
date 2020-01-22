const chalk = require("chalk");
const request = require("request");
const APIKey = require("./api_keys.js");
const darkSkyKey = APIKey.darkSkyAPI;
const mapBoxKey = APIKey.mapBoxAPI;

const darkSkyURL = `https://api.darksky.net/forecast/5ac9d5f5063bfe49782bc73a285b72ac/37.8267,-122.4233`;

const mapBoxURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/`;

request({ url: darkSkyURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service");
  } else if (response.body.error) {
    ("Unable to find location");
  } else {
    const currentWeather = response.body;
    console.log(
      `Forecast overview: ${currentWeather.daily.data[0].summary} It is currently ${currentWeather.currently.temperature} degrees out. There is a ${currentWeather.currently.precipProbability}% chance of rain.`
    );
  }
});

// request({ url: mapBoxURL, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to location services");
//   } else if (response.body.features[0].length === 0) {
//     console.log("Location not found");
//   } else {
//     const latitude = response.body.features[0].center[1];
//     const longitude = response.body.features[0].center[0];
//     console.log(latitude, longitude);
//   }
// });
