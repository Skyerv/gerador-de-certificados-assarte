import React from "react";
import NavCSS from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={NavCSS.navContainer}>
      <h1 className={NavCSS.navTitle}>Feira Cultural ASSARTE 2023</h1>
      <img
        src="/images/ASSARTELogo.png"
        alt="ASSARTE logo"
        className={NavCSS.navImage}
      />
    </div>
  );
};

export default Nav;
