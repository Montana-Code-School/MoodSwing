/* global chrome */

import React from 'react';
import Slider from 'react-rangeslider';
import './Semantic.css'

class Semantic extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 0
    }
  }

  handleChangeStart = () => {
    console.log('Change event started')
  };

  handleChange = value => {
    this.setState({
      value: value
    })
    console.log('Change event completed')
    chrome.storage.sync.set({'moodValue': this.state.value})
    chrome.storage.sync.get('moodValue', function(value) {
      console.log(value);
    });
  };

  handleChangeComplete = value => {
  //   this.setState({
  //     value: value
  //   })
  //   console.log('Change event completed')
  //   chrome.storage.sync.set({'moodValue': this.state.value})
  //   chrome.storage.sync.get('moodValue', function(value) {
  //     console.log(value);
  //   });
  };
  
  render () {
    const { value } = this.state
    // const { horizontal } = this.state
    const horizontalLabels = {
      0: 'ANGRY KITTY',
      1: 'NEUTRAL KITTY',
      2: 'HAPPY KITTY'
    }
    return (
      <div className='slider'>
        <Slider
          min={0}
          max={2}
          value={value}
          labels={horizontalLabels}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
      </div>
    )
  }
}

export default Semantic;
