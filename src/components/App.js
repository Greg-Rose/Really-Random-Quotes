import React, { Component } from 'react';
import '../stylesheets/App.css';
import Quote from './Quote';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Quote />
      </div>
    );
  }
}

export default App;
