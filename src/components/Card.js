import React from "react";
import { Link } from "react-router-dom";

export function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`} style={{ textDecoration: "none" }}>
      <div className="card">
        <div className="card__content">
          <img
            className="card__image"
            src={logement.cover}
            alt="logement"
          ></img>
          <h2 className="card__title">{logement.title}</h2>
        </div>
      </div>
    </Link>
  );
}
