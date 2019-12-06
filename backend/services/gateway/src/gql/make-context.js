import { getViewer } from 'util/viewer';

const makeContext = ({ event }) => {
  console.log(event);
  if (!event) {
    return Promise.reject(new Error('No lambda event detected'));
  }

  return {
    viewer: getViewer({ event })
  };
};

export { makeContext };
