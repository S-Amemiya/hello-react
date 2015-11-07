import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Html from './components/Html';

const server = global.server = express();

server.use(express.static('build/public'));

server.get('/', (req, res) => {
  const html = ReactDOM.renderToString(React.createElement(Html));
  res.send('<!doctype html>\n' + html);
})

server.listen(process.env.PORT || 5000);
