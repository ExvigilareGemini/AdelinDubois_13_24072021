import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router";
import apiLogin from "../callService";
import { loginAction } from "../redux/actions/login";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };

    this.getUsername = this.getUsername.bind(this);
    this.getPassword = this.getPassword.bind(this);
  }

  getUsername(event) {
    this.setState({ username: event.target.value });
  }

  getPassword(event) {
    this.setState({ password: event.target.value });
  }

  async clickOnLoginBtn() {
    const answer = await apiLogin(this.state.username, this.state.password);
    if (answer.status === 200) {
      return this.props.loginAction(answer.body.token);
    }
  }

  render() {
    if (this.props.user.auth) return <Redirect to="/profile" />;

    return (
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={this.state.username}
                onChange={this.getUsername}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={this.state.password}
                onChange={this.getPassword}
              />
            </div>
            <div className="input-remember">
              <label htmlFor="remember-me">Remember me</label>
              <input type="checkbox" id="remember-me" />
            </div>
            <button
              type="button"
              className="sign-in-button"
              onClick={() => this.clickOnLoginBtn()}
            >
              Sign In
            </button>
          </form>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({ user: { auth: state.auth, token: state.token } });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      loginAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
