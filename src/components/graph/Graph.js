/* global chrome */

import React from 'react';
import Chart from 'chart.js';

class Graph extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    chrome.storage.sync.get('moodValue', function(value) {
        let storedChromeMoodVals = value.moodValue;
        console.log(storedChromeMoodVals);
      var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Angry", "Neutral", "Happy"],
            datasets: [{
                label: '# of Votes',
                data: [6, 2, 1],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99,132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    });    
  }

  render () {

    return (
      <canvas id="myChart" width="400" height="400"></canvas>
    )
  }
}

export default Graph;