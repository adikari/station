const nextRoutes = require('next-routes');

const routes = nextRoutes();

routes
  .add({
    name: 'home',
    page: 'index',
    pattern: '/'
  })
  .add({
    name: 'projects',
    page: 'projects',
    pattern: '/projects'
  })
  .add({
    name: 'project',
    page: 'project',
    pattern: '/project/:projectId'
  });

module.exports = routes;
