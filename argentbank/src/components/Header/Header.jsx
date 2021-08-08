import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/argentBankLogo.png";
import Sign from "./Sign";

function Header() {
  return (
    <nav className="main-nav">
      <h1 className="sr-only">Argent Bank</h1>
      <Link className="homepageLink" to="/">
        <p className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
        </p>
      </Link>
      <Sign />
    </nav>
  );
}

export default Header;
