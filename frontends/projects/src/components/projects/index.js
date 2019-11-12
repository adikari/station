import React from 'react';
import { Link } from 'components/link';

export const Projects = () => (
  <div>
    <Link route='/'>Homepage</Link>
    <br />
    <Link route='/projects'>Projects</Link>
    <br />
    <Link route='/project/top-secret-project'>Top Secret</Link>
  </div>
);
