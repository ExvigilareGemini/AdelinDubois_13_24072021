import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="header">
      <nav className="main-nav">
        <Link className="homepageLink" exact to="/">
          <p className="main-nav-logo">
            <img
              className="main-nav-logo-image"
              src={Logo}
              alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
          </p>
        </Link>
        <div className="signLinkContainer">
          <Link className="signLink" exact to="/Sign">
            <p className="main-nav-item">
              <FontAwesomeIcon icon={faUserCircle} />
              Sign In
            </p>
          </Link>
        </div>
      </nav>
    </div>
  );
}
