import React, { Component } from 'react';
import Artist from './components/Artist'

class App extends Component {
  render() {
    return (
      <div>
        <Artist name="Adele" followers="5313380" imageUrl="https://i.scdn.co/image/f8737f6fda048b45efe91f81c2bda2b601ae689c" />
        <h1>Testing es6-react</h1>
      </div>
    );
  }
}

export default App;
