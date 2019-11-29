import * as project from 'usecases/project';

const makeContext = ({ event }) => {
  if (!event) {
    return Promise.reject(new Error('No lambda event detected'));
  }

  return {
    project,
    viewer: {
      id: 'ck2ppvh7e4q9s0714yi58vdqf'
    }
  };
};

export { makeContext };
