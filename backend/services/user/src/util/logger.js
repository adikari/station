const logger = {
  log: (msg, data) => console.log(msg, JSON.stringify(data)),
  error: (msg, error) => console.log(msg, JSON.stringify(error))
};

module.exports = { logger };
