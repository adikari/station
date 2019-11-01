const { prisma } = require('../../generated/prisma-client');

const { makeGetProjects } = require('./get-projects');

const getProjects = makeGetProjects({ db: prisma });

module.exports = { getProjects };
