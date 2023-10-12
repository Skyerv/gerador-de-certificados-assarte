import React from "react";
import PropTypes from "prop-types";
import PresentationCardCSS from "./PresentationCard.module.css";

const PresentationCard = ({
  title,
  date,
  responsible,
  presenter,
  initialHour,
  finalHour,
}) => {
  return (
    <div className={PresentationCardCSS.presentationCardContainer}>
      <div className={PresentationCardCSS.presentationCardContent}>
        <h2 className={PresentationCardCSS.presentationCardTitle}>{title}</h2>
        <p className={PresentationCardCSS.presentationCardDate}>
          <strong>
            Dia: {date} das {initialHour} até {finalHour}
          </strong>
        </p>
      </div>
      <div className={PresentationCardCSS.presentationCardDetails}>
        <p className={PresentationCardCSS.presentationCardResponsible}>
          <strong>Responsável:</strong> {responsible}
        </p>
        <p className={PresentationCardCSS.presentationCardPresenter}>
          <strong>Apresentador:</strong> {presenter}
        </p>
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
