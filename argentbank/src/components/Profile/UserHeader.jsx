import React from "react";
import { connect } from "react-redux";

function UserHeader(props) {
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {props.user.firstName} {props.user.lastName} !
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: {
    firstName: state.firstName,
    lastName: state.lastName,
  },
});

export default connect( mapStateToProps, null)(UserHeader);
