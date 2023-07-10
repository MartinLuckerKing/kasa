import React from "react";
import { Link } from "react-router-dom";

export function Error404() {
  return (
    <div className="error404">
      <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link className="error404__backToHome" to={"/"}>
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}
