import fs from 'fs';

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

    server.route({
      method: 'GET',
      path: '/server-push',
      handler: (request, h) => {
        console.log('-- were in here!');
        const response = h.response(fs.readFileSync(__dirname + '/public/home.html'));
        response.type('text/html');

        h.push(response, 'esm-1.js');
        h.push(response, 'esm-2.js');

        return response;
      }
    });
  }
};
