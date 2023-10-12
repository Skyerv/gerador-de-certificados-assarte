import React from "react";
import PropTypes from "prop-types";
import SpectTileCSS from "./SpectatorTile.module.css";

const StudentTile = ({ name }) => {
  return (
    <div className={SpectTileCSS.spectatorTile}>
      <h4 className={SpectTileCSS.spectatorTitle}>{name}</h4>
      <label className={SpectTileCSS.container}>
        <input type="checkbox"></input>
        <span className={SpectTileCSS.checkmark}></span>
      </label>
    </div>
  );
};

StudentTile.propTypes = {
  name: PropTypes.string.isRequired,
};

export default StudentTile;
