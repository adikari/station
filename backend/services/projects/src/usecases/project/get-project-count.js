const makeGetProjectCount = ({ db }) => () =>
  db
    .projectsConnection()
    .aggregate()
    .count();

module.exports = { makeGetProjectCount };
