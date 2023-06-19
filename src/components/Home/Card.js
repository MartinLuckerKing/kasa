import React from 'react'

export function Card({ logement }) {
  return (
    <div className="card">
      <div className="card__content">
        <img className='card__image' src={logement.cover} alt='logement'></img>
        <h2 className='card__title'>{logement.title}</h2>
      </div>
    </div>
  );
}