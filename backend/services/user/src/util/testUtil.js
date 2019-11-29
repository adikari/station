const getViewer = viewer =>
  Buffer.from(JSON.stringify(viewer)).toString('base64');

const getEvent = viewer => {
  return {
    headers: {
      viewer: getViewer(viewer)
    }
  };
};

export { getEvent, getViewer };
