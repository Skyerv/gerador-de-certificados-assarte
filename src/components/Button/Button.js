import React from "react";
import PropTypes from "prop-types";
import ButtonCSS from "./Button.module.css";

const Button = ({ text, onClick, color, type }) => {
  const buttonClass = `${ButtonCSS.btn} ${
    color === "red" ? ButtonCSS.redButton : ButtonCSS.greenButton
  }`;

  return (
    <button className={buttonClass} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["green", "red"]),
};

Button.defaultProps = {
  color: "green",
  type: "button",
};

export default Button;
