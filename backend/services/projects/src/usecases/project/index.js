const { db } = require('../../db');
const { makeGetProjects } = require('./get-projects');
const { makeCreateProject } = require('./create-project');

const getProjects = makeGetProjects({ db: prisma });
const createProject = makeCreateProject({ db: prisma });

module.exports = { getProjects, createProject };
