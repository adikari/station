const makeGetProjects = ({ db }) => () => db.projects();

module.exports = { makeGetProjects };
