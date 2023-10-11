import React from "react";
import PropTypes from "prop-types";
import "../presentationCard/PresentationCard.css";
import "./SpectatorTile.css";

const StudentTile = ({ name }) => {
  return (
    <div className="spectator-tile">
      <h4>{name}</h4>
      <label class="container">
        <input type="checkbox"></input>
        <span class="checkmark"></span>
      </label>
    </div>
  );
};

StudentTile.propTypes = {
  name: PropTypes.string.isRequired,
};

export default StudentTile;
