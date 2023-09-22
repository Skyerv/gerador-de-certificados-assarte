import React, { Component } from 'react';

class DateInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateValue: '',
    };
    this.inputRef = React.createRef();
  }

  handleDateChange = (e) => {
    let inputDate = e.target.value;

    inputDate = inputDate.replace(/\D/g, '').slice(0, 8);

    let formattedDate = '';
    for (let i = 0; i < inputDate.length; i++) {
      if (i === 2 || i === 4) {
        formattedDate += '/';
      }
      formattedDate += inputDate[i];
    }
    this.setState({ dateValue: formattedDate });
    this.inputRef.current.selectionEnd = this.inputRef.current.selectionStart = formattedDate.length;
  };

  render() {
    return (
      <input
        type="text"
        placeholder="DD/MM/YYYY"
        value={this.state.dateValue}
        onChange={this.handleDateChange}
        ref={this.inputRef}
      />
    );
  }
}

export default DateInput;