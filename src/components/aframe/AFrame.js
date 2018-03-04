import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene, Asset} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

class VRScene extends React.Component {
  render () {
    return (
      <Scene>
        <Entity gltf-model={{src: 'scene.gltf'}}/>
        <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
        <Entity particle-system={{preset: 'snow'}}/>
        <Entity light={{type: 'point'}}/>
        <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
        <Entity text={{value: 'MOODSWING!'}}/>
        
      </Scene>
    );
  }
}

export default VRScene;