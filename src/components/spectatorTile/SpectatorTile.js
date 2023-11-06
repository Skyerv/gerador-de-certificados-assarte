import React, { useState } from "react";
import SpectTileCSS from "./SpectatorTile.module.css";
import StudentController from "../../controllers/StudentController";

const StudentTile = ({ student, presentationId, isWatched, eventId }) => {
  const { registerWatchedPresentations, removeWatchedPresentation } =
    StudentController();
  const [isChecked, setIsChecked] = useState(isWatched);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      removeWatchedPresentation(student.id, presentationId, eventId);
    } else {
      registerWatchedPresentations(student.id, presentationId, eventId);
    }
  };

  return (
    <div className={SpectTileCSS.spectatorTile}>
      <h4 className={SpectTileCSS.spectatorTitle}>{student.name}</h4>
      <label className={SpectTileCSS.container}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className={SpectTileCSS.checkmark}></span>
      </label>
    </div>
  );
};

export default StudentTile;
