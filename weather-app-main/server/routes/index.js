const express = require("express");

const router = express.Router();

const weather =require('./weather.routes')

router.get("/healthcheck", (_, res) => res.sendStatus(200));

router.use(weather);

module.exports = router;
