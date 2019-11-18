const getConfig = env => {
  const environment = env || process.env.STAGE;

  try {
    // eslint-disable-next-line
    return require(`./${environment}.config.js`);
  } catch (err) {
    throw new Error(`Could not find config for ${environment}`);
  }
};

module.exports = {
  getConfig: () => ({
    ...getConfig(process.env.STAGE),
    STAGE: process.env.STAGE
  })
};
