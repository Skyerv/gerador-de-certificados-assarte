import React from "react";
import PropTypes from "prop-types";
import ButtonCSS from "./Button.module.css";

const Button = ({ text, onClick, color }) => {
  const buttonClass = `${ButtonCSS.btn} ${color === "red" ? ButtonCSS.redButton : ButtonCSS.greenButton}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["green", "red"]),
};

Button.defaultProps = {
  color: "green",
};

export default Button;
