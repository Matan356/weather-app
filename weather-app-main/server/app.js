const express = require("express");
const config = require("config");
const helmet = require("helmet");
const cors = require("cors");
const router = require("./routes");
const logger = require("./utils/logger");

const port = config.get("port");

const app = express();

app.use(helmet());

app.use(cors());

// app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use((req, _, next) => {
  logger.info(
    `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
  );
  next();
});


app.listen(port, async () => {
  logger.info(`App is running at http://localhost:${port}`);
  app.use(router);
});
