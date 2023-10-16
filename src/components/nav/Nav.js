import React from "react";
import NavCSS from "./Nav.module.css";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <div className={NavCSS.navContainer}>
      <img
        src="/images/ASSARTELogo.png"
        alt="ASSARTE logo"
        className={NavCSS.navImage}
      />
      <h1 className={NavCSS.navTitle}>Feira Cultural ASSARTE</h1>
      {pathname !== "/certificado" ? (
        <ul className={NavCSS.navUl}>
          <li>
            <Link to="/" className={pathname === "/" ? NavCSS.selected : ""}>
              Página Inicial
            </Link>
          </li>
          <li>
            <Link
              to="/procurar-certificados"
              className={
                pathname === "/procurar-certificados" ? NavCSS.selected : ""
              }
            >
              Certificados
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className={pathname === "/login" ? NavCSS.selected : ""}
            >
              Sou Professor
            </Link>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Nav;
