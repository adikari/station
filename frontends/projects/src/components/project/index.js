import React from 'react';
import { Link } from 'components/link';

export const Project = props => {
  const projectId = props.router.query.projectId || 'LOL';
  return (
    <div>
      <Link route='/'>Homepage</Link>
      <br />
      <Link route='/projects'>Projects</Link>
      <br />
      <Link route='/project/top-secret-project'>Top Secret</Link>
      <br />
      <div>Revealed: {projectId}</div>
    </div>
  );
};
