import {resolve} from 'path';

export default function (env) {
  return {
    mode: env,
    devtool: 'source-map',
    entry: './src/server',
    output: {
      filename: 'index.js',
      path: resolve(__dirname, 'lib', 'server'),
      libraryTarget: 'commonjs2'
    },
    target: 'node'
  };
}
