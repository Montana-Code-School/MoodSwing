import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import winterSkyVR from './winterSkyVR.jpg';

class VRScene extends React.Component {
  render () {
    var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';

    return (
      <Scene>
        <Entity particle-system={{preset: 'snow', particleCount: 5000}}/>
        <Entity primitive='a-box'   src='https://media.giphy.com/media/WXB88TeARFVvi/giphy.gif' position="0 0 -5"/>
        <Entity primitive='a-sphere' color="green" position="-2 0 -3"/>
        <Entity primitive='a-cylinder' color="blue" position="2 0 -3"/>
        <Entity primitive='a-sky' src={winterSkyVR}/>
        <Entity primitive='a-text'font= 'mozillavr' scale="0.6 1.2 1" value="HOLY CATZ!" color="black" position="-1 3 -3" width="3" size="6"/>
        <Entity primitive='a-text' font= 'mozillavr' value={greet} color="black" position="-1 2.85 -3"/>
        <Entity primitive='a-plane' rotation="-90 0 0"   src='https://media.giphy.com/media/WXB88TeARFVvi/giphy.gif' height="10" width="10"/> 
      </Scene>
    );
  }
}

export default VRScene;