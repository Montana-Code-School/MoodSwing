/* global chrome */

import React from 'react';
import Slider from 'react-rangeslider';
import { Button, Modal, Icon } from 'semantic-ui-react';
import './Semantic.css';
import "../../../node_modules/semantic-ui-forest-themes/semantic.darkly.css";
import 'font-awesome/css/font-awesome.min.css';
import ToneAnalyzer from '../toneanalyzer/ToneAnalyzer';
import Graph from '../graph/Graph';

class Semantic extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 1,
    }
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }

  handleChangeStart = () => {
    console.log('Change event started')
  };

  handleChange = moodVal => {
    this.setState({
      value: moodVal,
    })
    console.log('Change event completed')
    let currentMoodValue = {
      vals: [],
      dates: []
    };
    chrome.storage.sync.get('moodValue', function(storedVal) {
      currentMoodValue = storedVal.hasOwnProperty("moodValue") ? storedVal.moodValue : currentMoodValue; 
      console.log(currentMoodValue)
      let newMoodValue = {};
      newMoodValue.vals = [...currentMoodValue.vals, moodVal]
      newMoodValue.dates = [...currentMoodValue.dates, new Date().toString()]
      chrome.storage.sync.set({'moodValue': newMoodValue });
      chrome.storage.sync.get('moodValue', function(value) {
      });
    });
  };

  handleChangeComplete = value => {
  };

  handleClickEvent(e) {
    e.preventDefault();
    chrome.storage.sync.clear(function() {
      var error = chrome.runtime.lastError;
      if (error) {
          console.error(error);
      }
   });
  };
  
  render () {
    const value = this.state.value;
    const horizontalLabels = {
      0: 'ANGRY KITTY',
      1: 'NEUTRAL KITTY',
      2: 'HAPPY KITTY'
    }
    return (
      <div>
        <Modal trigger={<Button className="ui animated button"><Icon className="fa fa-heart"/></Button>}>
        <Modal.Header>Meow Check Your Mood</Modal.Header>
        <Modal.Content>
          <ToneAnalyzer/>
          </Modal.Content>
        <Modal.Content>
          <Graph/>
            <button className="ui animated button" onClick={this.handleClickEvent}>
              <div className="visible content">
                Erase the Past
              </div>
              <div className="hidden content">
                Be Gone!
              </div>
            </button>
          </Modal.Content>
        </Modal>
      <div>
        
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
      </div>
      </div>
    )
  }
}

export default Semantic;
