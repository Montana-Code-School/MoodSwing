import 'aframe';
import 'aframe-particle-system-component';
import 'aframe-event-set-component';
import { Entity, Scene } from 'aframe-react';
import React from 'react';
import winterSkyVR from './winterSkyVR.jpg';
import balloonSrc from './balloon.jpg';
import climbSrc from './climb.jpg';
import pukeSrc from './puke.jpg';
import groomSrc from './groom.gif';
import angrykittySrc from './angrykitty.jpeg';
import kitykittySrc from './kittykitty.jpeg';

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

        {/*<Entity primitive='a-box'   src='https://media.giphy.com/media/WXB88TeARFVvi/giphy.gif' position="0 0 -5"/>
        <Entity primitive='a-sphere' color="green" position="-2 0 -3"/>
        <Entity primitive='a-cylinder' color="blue" position="2 0 -3"/>
        <Entity primitive='a-plane' rotation="-90 0 0"   src='https://media.giphy.com/media/WXB88TeARFVvi/giphy.gif' height="10" width="10"/>  */}


        <a-assets>
          {/* <audio id="click-sound" src="audio/click.ogg"></audio> */}

          {/* Images. */}
          <img id="neutral" alt="Black cat, upright and filing its nails." src={groomSrc}/>
          <img id="puke" alt="360 degree world of green cubes layed out in rows." src={pukeSrc}/>
          <img id="angrykitty" alt="Large, fluffy white cat with a birthday hat and cake looking very unhappy." src={angrykittySrc}/>
          <img id="climb" alt="climb" src={climbSrc}/>
          <img id="kittykitty" alt="Small white kitten on its back with its paws stretched over its head." src={kitykittySrc}/>
          <img id="balloon" alt="Small white kitten on its back with its paws stretched over its head." src={balloonSrc}/>


        </a-assets>
        
        {/* 360-degree image. */}

        <Entity id="image-360" primitive='a-sky' radius="10" src={balloonSrc}/>

        <Entity primitive='a-text'font= 'mozillavr' scale="0.6 1.2 1" value="If you need to talk to someone about how you're feeling, please call the Crisis Hotline 1-800-273-8255" color="black" position="-.75 2 -13" width="3" size="6"/>
        <Entity primitive='a-text'font= 'mozillavr' scale="0.6 1.2 1" value="HOLY CATZ!" color="black" position="-.75 2 -3" width="3" size="6"/>
        <Entity primitive='a-text' font= 'mozillavr' value={greet} color="black" position="-.85 1.85 -3"/>

          {/* Camera + Cursor.  */}
          <a-camera>
            <a-cursor id="cursor" 
              animation-click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150" 
              animation-fusing="property: fusing; startEvents: fusing; from: 1 1 1; to: 0.1 0.1 0.1; dur: 1500" 
              event-set__1="_event: mouseenter; color: springgreen" 
              event-set__2="_event: mouseleave; color: yellow" 
              fuse="true" 
              raycaster="objects: .link" 
              color="yellow" 
              fusing="0.09999999999999998 0.09999999999999998 0.09999999999999998 ">
            </a-cursor>
          </a-camera>

          {/* Link we will build. */}
          <Entity id="links" layout="layout: line; margin: 1.5" position="1.5 -1 -4">
          <Entity class="link" 
            position="-3"
            geometry="primitive: plane; height: 1; width: 1" 
            material="shader: flat; src: #angrykitty" 
            event-set="_event: mousedown; on: click; _target: #image-360; src: #puke">
            {/* sound="on: click; src: #click-sound"> */}
          </Entity>
          <Entity class="link" 
            position="-1.5"
            geometry="primitive: plane; height: 1; width: 1" 
            material="shader: flat; src: #neutral" 
            event-set="_event: mousedown; on: click; _target: #image-360; src: #balloon" >
            {/* sound="on: click; src: #click-sound"> */}
          </Entity>
          <Entity class="link" 
            geometry="primitive: plane; height: 1; width: 1" 
            material="shader: flat; src: #kittykitty" 
            event-set="_event: mousedown; on: click; _target: #image-360; src: #climb" >
            {/* sound="on: click; src: #click-sound"> */}
          </Entity>
        </Entity>

       
      </Scene>
    );
  }
}

export default VRScene;