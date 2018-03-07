import React, { Component } from 'react';
import VRScene from './components/aframe/AFrame';
import Semantic from './components/semantic/Semantic';
// import ToneAnalyzer from './components/toneanalyzer/ToneAnalyzer';

class App extends Component {
  render() {
    return (
      <div>
        <VRScene/>
        <Semantic/>
        <div className="ui centered grid">
          {/* <ToneAnalyzer/> */}
        </div>
      </div>
    );
  }
}

export default App;
