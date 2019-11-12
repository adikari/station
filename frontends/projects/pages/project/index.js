import React from 'react';
import { withRouter } from 'next/router';
import { Project } from 'components/project';

const ProjectPage = props => <Project {...props} />;

export default withRouter(ProjectPage);
