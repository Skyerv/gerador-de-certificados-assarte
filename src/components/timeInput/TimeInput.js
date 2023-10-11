import React, { Component } from 'react';

class TimeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeValue: '',
    };
    this.inputRef = React.createRef();
  }

  handleTimeChange = (e) => {
    let inputTime = e.target.value;
    inputTime = inputTime.replace(/\D/g, '').slice(0, 4);
    let formattedTime = '';
    for (let i = 0; i < inputTime.length; i++) {
      if (i === 2) {
        formattedTime += ':';
      }
      formattedTime += inputTime[i];
    }
    this.setState({ timeValue: formattedTime });
    this.inputRef.current.selectionEnd = this.inputRef.current.selectionStart = formattedTime.length;
  };

  render() {
    return (
      <input
        type="text"
        placeholder="HH:MM"
        value={this.state.timeValue}
        onChange={this.handleTimeChange}
        ref={this.inputRef}
      />
    );
  }
}

export default TimeInput;