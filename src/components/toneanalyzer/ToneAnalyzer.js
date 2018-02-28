/* global chrome */

import React from 'react';
import Textarea from 'react-textarea-count';
// import { Button } from 'semantic-ui-react';
import "../../../node_modules/semantic-ui-forest-themes/semantic.darkly.css";
import axios from 'axios';

class ToneAnalyzer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      enteredMoodText: "What's on your mind?",
      textMood: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('Text to be analyzed: ' + this.state.value);
    event.preventDefault();
  }

  componentDidMount() {
  axios.get(
    "https://watson-api-explorer.mybluemix.net/tone-analyzer/api/v3/tone?text=" +
    "This%20is%20a%20test%20of%20this%20API%20but%20it%20needs%20some%20feelings%20and%20I%20am%20trying%20again!" +
    "&version=2018-02-27&sentences=true&tones=emotion"

    // "https://watson-api-explorer.mybluemix.net/tone-analyzer/api/v3/tone?text=" +
    // enteredMoodText +
    // "&version=2018-02-27&sentences=true&tones=emotion"
  )
    .then((response) => {
      console.log(response)

    })
    .catch((error) => {
      console.log("Nope");
    });
}

  // constructor (props, context) {
  //   super(props, context)
  //   this.state = {
  //     value: 1,
  //   }
  //   this.handleClickEvent = this.handleClickEvent.bind(this);
  // }

  // handleChangeStart = () => {
  //   console.log('Change event started')
  // };

  // handleChange = value => {
  //   this.setState({
  //     value: value,
  //   })
  //   console.log('Change event completed')
  //   let currentMoodValue = {
  //     vals: [],
  //     dates: []
  //   };
  //   chrome.storage.sync.get('moodValue', function(value) {
  //     currentMoodValue = value.hasOwnProperty("moodValue") ? value.moodValue : currentMoodValue; 
    
  //     let newMoodValue = {};
  //     newMoodValue.vals = [...currentMoodValue.vals, value]
  //     newMoodValue.dates = [...currentMoodValue.dates, new Date().toString()]
  //       chrome.storage.sync.set({'moodValue': newMoodValue });
  //     // localStorage.setItem('moodValue', {
  //     //   dates: this.state.dates,
  //     //   values: this.state.values
  //     // })
  //     chrome.storage.sync.get('moodValue', function(value) {
  //       console.log(value);
  //     });
  //     // localStorage.getItem('moodValue', function(value) {
  //     //   console.log(value);
  //     // });
  //   });
  // };

  // handleChangeComplete = value => {
  // //   this.setState({
  // //     value: value
  // //   })
  // //   console.log('Change event completed')
  // //   chrome.storage.sync.set({'moodValue': this.state.value})
  // //   chrome.storage.sync.get('moodValue', function(value) {
  // //     console.log(value);
  // //   });
  // };

  // handleClickEvent(e) {
  //   e.preventDefault();
  //   chrome.storage.sync.clear(function() {
  //     var error = chrome.runtime.lastError;
  //     if (error) {
  //         console.error(error);
  //     }
  //  });
  // };

  // // clearStorage = () => {
  // //   console.log("it's working");
  // // };
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="ui form segment">
          <div class="field">
        <label>
          What's on your mind?
          <Textarea />
        </label>
        <input className="ui submit button" type="submit" value="Analyze My Mood" onClick={this.handleClickEvent}>
        </input>
          </div>
        </div>
      </form>
    );
  }
}

export default ToneAnalyzer;
