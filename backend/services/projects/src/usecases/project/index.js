import { db } from 'db';
import { makeGetProjects } from 'usecases/project/get-projects';
import { makeCreateProject } from 'usecases/project/create-project';
import { makeGetProjectCount } from 'usecases/project/get-project-count';

export const getProjects = makeGetProjects({ db });
export const getProjectCount = makeGetProjectCount({ db });

export const createProject = makeCreateProject({ db });
