const get = require('lodash.get');

const getViewer = ({ event }) => {
  const viewerString = get(event, 'headers.viewer') || '';

  try {
    const jsonString = Buffer.from(viewerString, 'base64').toString();
    return JSON.parse(jsonString);
  } catch (e) {
    return {};
  }
};

module.exports = { getViewer };
