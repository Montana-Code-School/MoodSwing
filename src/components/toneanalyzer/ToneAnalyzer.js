/* global chrome */

import React from 'react';
// import Textarea from 'react-textarea-count';
// import { Button } from 'semantic-ui-react';
import "../../../node_modules/semantic-ui-forest-themes/semantic.darkly.css";
import axios from 'axios';

class ToneAnalyzer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      enteredToneText: "Im feeling nervous about trying to make this work. Why don't we give it a whirl",
      moodTones: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log('Text to be analyzed: ' + this.state.value);
    event.preventDefault();
  }

  componentDidMount() {
    axios.get(
      "https://watson-api-explorer.mybluemix.net/tone-analyzer/api/v3/tone?text=" +
      this.state.enteredToneText +
      "&version=2018-02-27&sentences=true&tones=emotion"
    )
      .then((response) => {
        console.log(response)
        this.setState({
          moodTones: response.data.document_tone.tones
        })
      })
      .catch((error) => {
        console.log("Nope");
      });
  }
  
  render() {
    const moodItems = this.state.moodTones.map((moodTone) =>
      <li key={moodTone.tone_id}>{moodTone.tone_name}</li>
    );

    return(
      <form onSubmit = { this.handleSubmit } >
        <div className="ui form segment">
          <div className="field">
            <label>
              What's on your mind?
              <textarea />
            </label>
            <input className="ui submit button" type="submit" value="Analyze My Mood" onClick={this.handleClickEvent}>
            </input>
          </div>
        <h1> You are feeling: </h1>
        <ul>
          {moodItems}
        </ul>
        </div>
      </form>
    );
  }
}

export default ToneAnalyzer;
