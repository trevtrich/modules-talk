import bunyan from 'bunyan';
import path from 'path';
import http2 from 'http2';
import fs from 'fs';

const listener = http2.createSecureServer({
  key: fs.readFileSync(path.join(__dirname, '/localhost.key')),
  cert: fs.readFileSync(path.join(__dirname, '/localhost.crt'))
});

require('dotenv-safe').config();

const logger = bunyan.createLogger({
  name: 'modules-talk'
});

export default {
  server: {
    port: process.env.PORT,
    routes: {security: true, files: {relativeTo: path.join(__dirname, 'public')}},
    tls: true,
    listener
  },
  register: {
    plugins: [
      {
        plugin: require('hapi-graceful-shutdown-plugin'),
        options: {
          sigtermTimeout: 10,
          sigintTimeout: 1
        }
      },
      {
        plugin: require('@hapi/good'),
        options: {
          ops: {
            interval: 1000
          },
          reporters: {
            bunyan: [
              {
                module: require('good-bunyan'),
                args: [
                  {log: '*', request: '*', response: '*', error: '*'},
                  {logger, levels: {response: 'info', request: 'info'}}
                ]
              }
            ]
          }
        }
      },
      {plugin: require('underdog')},
      {plugin: require('@hapi/inert')},
      {plugin: require('./inert-routes')}
    ]
  }
};
