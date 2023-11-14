import React from "react";

const DateInput = ({ value, onChange }) => {
  const handleDateChange = (e) => {
    let inputDate = e.target.value;

    inputDate = inputDate.replace(/\D/g, "").slice(0, 8);

    let formattedDate = "";
    for (let i = 0; i < inputDate.length; i++) {
      if (i === 2 || i === 4) {
        formattedDate += "/";
      }
      formattedDate += inputDate[i];
    }

    onChange(formattedDate);
  };

  return (
    <input
      required={true}
      type="text"
      placeholder="DD/MM/YYYY"
      value={value}
      onChange={handleDateChange}
    />
  );
};

export default DateInput;
