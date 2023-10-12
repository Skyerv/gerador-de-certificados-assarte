import React from "react";
import PropTypes from "prop-types";
import StudentTileCSS from "./StudentTile.module.css";

const StudentTile = ({ name }) => {
  return (
    <div className={StudentTileCSS.studentTile}>
      <h4>{name}</h4>
    </div>
  );
};

StudentTile.propTypes = {
  name: PropTypes.string.isRequired,
};

export default StudentTile;
