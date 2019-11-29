export const makeCreateProject = ({ db }) => ({ name, description, owner }) =>
  db.createProject({
    name,
    description,
    owner: {
      connect: {
        id: owner
      }
    }
  });
