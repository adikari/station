export const makeGetProjects = ({ db }) => ({ page, pageSize }) =>
  db.projects({ first: pageSize, skip: pageSize * (page - 1) });
