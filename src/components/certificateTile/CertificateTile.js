import React from "react";
import CertificateTileCSS from "./CertificateTile.module.css";

const CertificateTile = ({ name, theme }) => {
  return (
    <div className={CertificateTileCSS.certificateTile}>
      <h4>{name}</h4>
      <p>{theme}</p>
    </div>
  );
};

export default CertificateTile;
