import React from 'react';
import PropTypes from 'prop-types';
import './PresentationCard.css';

const PresentationCard = ({ title, date, responsible, presenter, initialHour, finalHour }) => {
  return (
    <div className="custom-card">
      <div className="custom-card-content">
        <h2 className="custom-card-title">{title}</h2>
        <p className="custom-card-date"><span>Dia: {date} das {initialHour} até {finalHour}</span></p>
      </div>
      <div className="custom-card-details">
        <p className="custom-card-responsible"><span>Responsável:</span> {responsible}</p>
        <p className="custom-card-presenter"><span>Apresentador:</span> {presenter}</p>
      </div>
    </div>
  );
};

PresentationCard.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    responsible: PropTypes.string.isRequired,
    presenter: PropTypes.string.isRequired,
    initialHour: PropTypes.string,
    finalHour: PropTypes.string,
};

export default PresentationCard;
