import React from "react";
import UserHeader from "../components/Profile/UserHeader";
import Account from "../components/Profile/Account";
import { accountDatas } from "../data/account-datas";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { bindActionCreators } from "redux";
import { getProfileDatas } from "../redux/actions/edit";

export class user extends React.Component {
  async componentDidMount() {
    const { token } = this.props.user;
    return this.props.getProfileDatas(token);
  }

  render() {
    const { isAuth } = this.props.user;
    if (isAuth)
      return (
        <main className="main bg-dark">
          <UserHeader />
          <h2 className="sr-only">Accounts</h2>
          {accountDatas.map((obj, index) => {
            return (
              <Account
                key={obj.title + index}
                title={obj.title}
                amount={obj.amount}
                description={obj.description}
              />
            );
          })}
        </main>
      );
    return <Redirect to="/" />;
  }
}

const mapStateToProps = (state) => ({
  user: {
    isAuth: state.isAuth,
    token: state.token,
  },
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getProfileDatas,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(user);
