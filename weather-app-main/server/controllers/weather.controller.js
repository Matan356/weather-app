const config = require("config");
const logger = require("../utils/logger");
const API_KEY = config.get("weatherAPI");

const getWeather = require("../services/weather.service");

async function readWeather(req, res) {
  const locationName = req.params.locationName;
  if (!locationName || locationName === null) return
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${locationName}&days=1&aqi=no`;

  let result;
  try {
    result = await getWeather(url);
    res.send(result)
  } catch (e) {
    logger.error(e.massage);
    return res.status(400).json(e.message);
  }
}

module.exports = readWeather;
