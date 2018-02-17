import React, { Component } from 'react';
import VRScene from './components/aframe/AFrame';
import Semantic from './components/semantic/Semantic';

class App extends Component {
  render() {
    return (
      <div>
        <VRScene/>
        <Semantic/>
      </div>
    );
  }
}

export default App;
