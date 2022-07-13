const  makeLogger = require("pino");
const  dayjs = require("dayjs");
const  config = require("config");



const logger = makeLogger({
  transport: {
    target: "pino-pretty",
  },
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
});


module.exports = logger;
