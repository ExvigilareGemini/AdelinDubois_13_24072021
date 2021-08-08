import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { bindActionCreators } from "redux";
import { logoutAction } from "../../redux/actions/login";

export class Sign extends React.Component {
  clickOnLogout() {
    return this.props.logoutAction();
  }

  render() {
    if (this.props.user.isAuth) {
      return (
        <div>
          <div className="signLinkContainer">
            <Link className="signLink" to="/profile">
              <p className="main-nav-item">
                <FontAwesomeIcon icon={faUserCircle} />{" "}
                {this.props.user.firstName}
              </p>
            </Link>
            <Link className="signLink" to="/">
              <p className="main-nav-item" onClick={() => this.clickOnLogout()}>
                <FontAwesomeIcon icon={faSignOutAlt} />{" "}
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
}

const mapStateToProps = (state) => ({
  user: { isAuth: state.isAuth, firstName: state.firstName },
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      logoutAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Sign);
