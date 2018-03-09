/* global chrome */

import React from 'react';
// import Textarea from 'react-textarea-count';
// import { Button } from 'semantic-ui-react';
import "../../../node_modules/semantic-ui-forest-themes/semantic.darkly.css";
import axios from 'axios';

class Graph extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      enteredToneText: "",
      moodTones: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ 
      enteredToneText: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
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
        alert("Tell me more?")
      });
  }
  
drawGraph(){
  Highcharts.chart('container', {

    chart: {
        polar: true
    },

    title: {
        text: 'Highcharts Polar Chart'
    },

    pane: {
        startAngle: 0,
        endAngle: 360
    },

    xAxis: {
        tickInterval: 45,
        min: 0,
        max: 360,
        labels: {
            formatter: function () {
                return this.value + '°';
            }
        }
    },

    yAxis: {
        min: 0
    },

    plotOptions: {
        series: {
            pointStart: 0,
            pointInterval: 45
        },
        column: {
            pointPadding: 0,
            groupPadding: 0
        }
    },

    series: [{
        type: 'column',
        name: 'Column',
        data: [8, 7, 6, 5, 4, 3, 2, 1],
        pointPlacement: 'between'
    }, {
        type: 'line',
        name: 'Line',
        data: [1, 2, 3, 4, 5, 6, 7, 8]
    }, {
        type: 'area',
        name: 'Area',
        data: [1, 8, 2, 7, 3, 6, 4, 5]
    }]
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
              <textarea onChange = { this.handleChange }/>
            </label>
            <input className="ui submit button" type="submit" value="Analyze My Mood">
            </input>
          </div>
         You are feeling: 
        <ul>
          {moodItems}
        </ul>
        </div>
      </form>
    );
  }
}

export default Graph;
