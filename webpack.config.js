import merge from 'lodash.merge';

const config = {
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' },
      { test: /\.json$/, loader: 'json' },
    ],
  },
};

const appConfig = merge({}, config, {
  entry: './src/app.js',
  output: {
    path: './build/public',
    filename: 'app.js',
  }
});

const serverConfig = merge({}, config, {
  entry: './src/server.js',
  output: {
    path: './build',
    filename: 'server.js',
  },
  target: 'node',
});

export default [appConfig, serverConfig];
