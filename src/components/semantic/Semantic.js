/* global chrome */

import React from 'react';
import Slider from 'react-rangeslider';
import './Semantic.css'

class Semantic extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      values: [],
      dates: []
    }
  }

  handleChangeStart = () => {
    console.log('Change event started')
  };

  handleChange = value => {
    this.setState({
      values: [...this.state.values, value],
      dates: [...this.state.dates, new Date().toString()]
    })
    console.log('Change event completed')
    let currentMoodValue = {
      vals: [],
      dates: []
    };
    chrome.storage.sync.get('moodValue', function(value) {
      currentMoodValue = value.hasOwnProperty("moodValue") ? value.moodValue : currentMoodValue; 
    
      let newMoodValue = {};
      newMoodValue.vals = [...currentMoodValue.vals, value]
      newMoodValue.dates = [...currentMoodValue.dates, new Date().toString()]
        chrome.storage.sync.set({'moodValue': newMoodValue });
      // localStorage.setItem('moodValue', {
      //   dates: this.state.dates,
      //   values: this.state.values
      // })
      chrome.storage.sync.get('moodValue', function(value) {
        console.log(value);
      });
      // localStorage.getItem('moodValue', function(value) {
      //   console.log(value);
      // });
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
    const value = this.state.values.length ? this.state.values[this.state.values.length-1] : 0;
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
