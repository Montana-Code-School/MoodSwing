import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import React from 'react';

class VRScene extends React.Component {
  render () {
    return (
      <Scene>
        <Entity primitive='a-box' color="red" position="0 0 -5"/>
        <Entity primitive='a-sphere' color="green" position="-2 0 -3"/>
        <Entity primitive='a-cylinder' color="blue" position="2 0 -3"/>
        <Entity primitive='a-sky' color="skyblue"/>
        <Entity primitive='a-text' value="MOODSWING" color="black" position="1 3 -3"/>
      </Scene>
    );
  }
}

export default VRScene;