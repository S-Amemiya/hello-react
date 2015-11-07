import React from 'react';

class Html extends React.Component {
  render() {
    return (
      <html className="no-js" lang="">
      <head>
        <meta charSet="utf-8" />
        <title>react-starter</title>
      </head>
      <body>
        <div id="app" />
        <script src="/app.js"></script>
      </body>
      </html>
    );
  }
}

export default Html;
