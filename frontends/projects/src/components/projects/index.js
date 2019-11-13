import React from 'react';
import { Link } from 'components/link';
import { Button } from 'antd';

export const Projects = () => (
  <div>
    <Link route='/'>
      <Button type='primary'>Homepage</Button>
    </Link>
    <br />
    <Link route='/projects'>
      <Button type='primary'>Projects</Button>
    </Link>
    <br />
    <Link route='/project/top-secret-project'>
      <Button type='danger'>Top Secret</Button>
    </Link>
  </div>
);
