import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-rangeslider';
import './Semantic.css'

class Semantic extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 25
    }
  }

  handleChangeStart = () => {
    console.log('Change event started')
  };

  handleChange = value => {
    this.setState({
      value: value
    })
  };

  handleChangeComplete = () => {
    console.log('Change event completed')
  };
  
  render () {
    const { value } = this.state
    const { horizontal } = this.state
    const horizontalLabels = {
      0: 'Low',
      25: 'Medium',
      50: 'High'
    }
    return (
      <div className='slider'>
        <Slider
          min={0}
          max={50}
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
