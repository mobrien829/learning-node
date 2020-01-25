const https = require("https");
const APIKey = require("../weather-app/api_keys.js");

const url = `https://api.darksky.net/forecast/${APIKey.darkSkyAPI}/40,-75`;

const request = https.request(url, response => {
  let data = "";
  response.on("data", chunk => {
    data = data + chunk.toString();
  });
  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

response.on("error", error => {
  console.log("An error", error);
});

request.end();
