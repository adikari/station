const makeCreateProject = ({ db }) => ({ name, description }) => db.createProject({ name, description });

module.exports = { makeCreateProject };
