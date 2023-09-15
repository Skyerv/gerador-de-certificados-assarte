import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">Sustentabilidade:</h2>
        <p className="card-text">
          Sustentabilidade é a capacidade de uso consciente dos recursos naturais sem comprometer o bem-estar das gerações futuras. Seu objetivo principal é encontrar o equilíbrio entre o desenvolvimento econômico e a preservação ambiental.
        </p>
      </div>
      <div className="card-image">
        <img src="/images/sustentabilityImage.png" alt="Sustentabilidade" />
      </div>
    </div>
  );
};

export default Card;