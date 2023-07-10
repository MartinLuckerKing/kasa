import React from "react";
import logoFooter from "./../images/logoKasaWhite.png";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img className="footer__logo" src={logoFooter} alt="Logo Footer"></img>
        <div className="footer__copyright">
          <div className="footer__copyright__text">
            © 2020 Kasa. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
