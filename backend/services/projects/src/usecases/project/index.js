const { db } = require('../../db');
const { makeGetProjects } = require('./get-projects');
const { makeCreateProject } = require('./create-project');

const getProjects = makeGetProjects({ db });
const createProject = makeCreateProject({ db });

module.exports = { getProjects, createProject };
