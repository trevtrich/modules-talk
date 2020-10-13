export const plugin = {
  name: 'inert-route-setup-plugin',
  async register(server) {
    server.route({
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: {
          defaultExtension: 'html',
          path: '.',
          redirectToSlash: true
        }
      }
    });
  }
};
