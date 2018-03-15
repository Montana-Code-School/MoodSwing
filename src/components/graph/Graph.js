/* global chrome */

import React from 'react';
import Chart from 'chart.js';

class Graph extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  arraySum(storedChromeMoodVals) {
    var test = storedChromeMoodVals
    var zero = 0;
    var one = 0;
    var two = 0;
    
    for(var i = 0; i < test.length; i++){
      console.log(test[i])
       if (test[i] === 0){
         zero++;
       }
      else if(test[i] === 1){
        one++;
      }
      else if(test[i] === 2){
         two++;
      }
      
    }
    var done = [];
    done.push(zero);
    done.push(one);
    done.push(two);
    
    return(done);
}  

  componentDidMount() {
    chrome.storage.sync.get('moodValue', (value) => {
        let storedChromeMoodVals = this.arraySum(value.moodValue.vals);
        console.log(storedChromeMoodVals);
      var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Angry Kitty", "Neutral Kitty", "Happy Kitty"],
            datasets: [{
                label: '# of Votes',
                data: storedChromeMoodVals,
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