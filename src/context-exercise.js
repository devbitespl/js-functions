const logger = {
  name: "LOGGER",
  log(arg) {
    console.log(`[${this.name}] ${arg}`);
  },
  info(arg) {
    console.info(`[${this.name}] ${arg}`);
  },
  warn(arg) {
    console.warn(`[${this.name}] ${arg}`);
  },
  error(arg) {
    console.error(`[${this.name}] ${arg}`);
  },
};

logger.log("siema");

Promise.resolve(125).then(logger.log);
