import React from 'react';
import PropTypes from 'prop-types';
import '../presentationCard/PresentationCard.css';

const StudentTile = ({ name }) => {
  return (
    <div className="student-tile">
        <h4>{name}</h4>
    </div>
  );
};

StudentTile.propTypes = {
    name: PropTypes.string.isRequired,
};

export default StudentTile;
