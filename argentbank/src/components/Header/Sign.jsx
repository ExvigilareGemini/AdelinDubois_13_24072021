import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function Sign(props) {
  if (props.user.isAuth) {
    return (
      <div>
        <div className="signLinkContainer">
          <Link className="signLink" to="/profile">
            <p className="main-nav-item">
              <FontAwesomeIcon icon={faUserCircle} />
              Tony
            </p>
          </Link>
          <Link className="signLink" to="/">
            <p className="main-nav-item">
              <FontAwesomeIcon icon={faSignOutAlt} />
              Sign Out
            </p>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="signLinkContainer">
          <Link className="signLink" to="/login">
            <p className="main-nav-item">
              <FontAwesomeIcon icon={faUserCircle} />
              Sign In
            </p>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ user: { isAuth: state.isAuth } });

export default connect(mapStateToProps, null)(Sign);
