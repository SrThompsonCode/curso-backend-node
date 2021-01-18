const EventEmmiter = require("events");

class Logger extends EventEmmiter {
  execute(cb) {
    console.log("Before");
    this.emit("start");
    cb();
    this.emit("finish");
    console.log("After");
  }
}

const logger = new Logger();

logger.on("start", () => console.log("Start"));
logger.on("finish", () => console.log("Finish"));
logger.on("finish", () => console.log("DONE"));

logger.execute(() => console.log("Hello World"));
