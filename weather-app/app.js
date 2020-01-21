const chalk = require("chalk");
const request = require("request");

const url =
  "https://api.darksky.net/forecast/5ac9d5f5063bfe49782bc73a285b72ac/37.8267,-122.4233";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.currently);
});
