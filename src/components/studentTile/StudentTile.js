import React from "react";
import PropTypes from "prop-types";
import { FaTrash, FaEdit } from "react-icons/fa";
import StudentTileCSS from "./StudentTile.module.css";

const StudentTile = ({ id, name, onDelete, onEdit, eventId }) => {
  return (
    <div className={StudentTileCSS.studentTile}>
      <h4>{name}</h4>
      <div className={StudentTileCSS.studentIcons}>
        <FaEdit
          onClick={() => onEdit(id, name, eventId)}
          className={StudentTileCSS.editIcon}
        />
        <FaTrash
          onClick={() => onDelete(id, eventId)}
          className={StudentTileCSS.deleteIcon}
        />
      </div>
    </div>
  );
};

StudentTile.propTypes = {
  name: PropTypes.string.isRequired,
};

export default StudentTile;
