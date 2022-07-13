const express = require("express");
const { param } = require("express-validator");

const router = express.Router();

const readWeather = require("../controllers/weather.controller");

router.get("/api/:locationName", readWeather);

module.exports = router;
