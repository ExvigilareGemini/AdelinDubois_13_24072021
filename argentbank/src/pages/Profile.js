import React from "react";
import UserHeader from "../components/Profile/UserHeader";
import Account from "../components/Profile/Account";
import { accountDatas } from "../data/account-datas";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { getUserDatas } from "../callService";
import { bindActionCreators } from "redux";
import { updateProfileAction } from "../redux/actions/edit";

export class user extends React.Component {
  async componentDidMount() {
    const answer = await getUserDatas(this.props.user.token);
    if (answer.status === 200) {
      return this.props.updateProfileAction(
        answer.body.firstName,
        answer.body.lastName
      );
    }
  }

  render() {
    if (!this.props.user.isAuth) return <Redirect to="/" />;
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
      updateProfileAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(user);
