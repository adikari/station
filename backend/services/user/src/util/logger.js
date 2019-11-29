const logger = {
  log: data => console.log(JSON.stringify(data)),
  error: (msg, error) => console.log(msg, JSON.stringify(error))
};

module.exports = { logger };
