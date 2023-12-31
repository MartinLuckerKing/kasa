import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./../images/logoKasa.png";

export function Header() {
  return (
    <header className="Header">
      <div className="logo logo__header">
        <img src={Logo} alt="logo" />
      </div>
      <nav className="navBar">
        <NavLink className="activeNavbar" to="/">
          accueil
        </NavLink>
        <NavLink className="activeNavbar" to="/about">
          À propos
        </NavLink>
      </nav>
    </header>
  );
}
