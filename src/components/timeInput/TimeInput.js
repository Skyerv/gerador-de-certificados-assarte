import React from "react";

const TimeInput = ({ value, onChange }) => {
  const handleTimeChange = (e) => {
    let inputTime = e.target.value;
    inputTime = inputTime.replace(/\D/g, "").slice(0, 4);
    let formattedTime = "";
    for (let i = 0; i < inputTime.length; i++) {
      if (i === 2) {
        formattedTime += ":";
      }
      formattedTime += inputTime[i];
    }
    onChange(formattedTime);
  };

  return (
    <input
      required={true}
      type="text"
      placeholder="HH:MM"
      value={value}
      onChange={handleTimeChange}
    />
  );
};

export default TimeInput;
