export const makeGetProjectCount = ({ db }) => () =>
  db
    .projectsConnection()
    .aggregate()
    .count();
