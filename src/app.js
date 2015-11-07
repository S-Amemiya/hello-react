import React from 'react';
import ReactDOM from 'react-dom';

const appContainer = document.getElementById('app');

class App extends React.Component {
  render() {
    return (
      <div>react-starter!!</div>
    );
  }
}

ReactDOM.render(<App />, appContainer);
