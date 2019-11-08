const { db } = require('../../db');
const { makeGetProjects } = require('./get-projects');
const { makeCreateProject } = require('./create-project');
const { makeGetProjectCount } = require('./get-project-count');

const getProjects = makeGetProjects({ db });
const getProjectCount = makeGetProjectCount({ db });

const createProject = makeCreateProject({ db });

module.exports = { getProjects, getProjectCount, createProject };
