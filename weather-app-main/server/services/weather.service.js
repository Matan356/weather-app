const logger = require("../utils/logger");

module.exports = async function getWeather(url) {
  return await fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((e) => {
      logger.error(e.massage);
      throw new Error("Could not provided a weader information");
    });
};
