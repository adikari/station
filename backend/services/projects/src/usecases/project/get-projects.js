const makeGetProjects = ({ db }) => ({ page, pageSize }) => db.projects({ first: pageSize, skip: pageSize * (page - 1) });

module.exports = { makeGetProjects };
