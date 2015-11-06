export default {
  entry: './src/server.js',
  output: {
    path: './build',
    filename: 'server.js',
  },
  target: 'node',
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
