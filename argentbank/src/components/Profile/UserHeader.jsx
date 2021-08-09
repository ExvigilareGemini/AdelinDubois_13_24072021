import React from "react";
import { connect } from "react-redux";

function UserHeader(props) {
  // return (
  //   <div className="header">
  //     <h1>
  //       Welcome back
  //       <br />
  //       {props.user.firstName} {props.user.lastName} !
  //     </h1>
  //     <button className="edit-button">Edit Name</button>
  //   </div>
  return (
    <div className="header">
      <h1 className="inputTitle">Welcome back</h1>
      <div className="inputContainer">
        <input
          className="inputName"
          type="text"
          placeholder={props.user.firstName}
        />
        <input
          className="inputName"
          type="text"
          placeholder={props.user.lastName}
        />
      </div>
      <div className="buttonContainer">
        <button className="edit-button save-button">Save</button>
        <button className="edit-button save-button">Cancel</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: {
    firstName: state.firstName,
    lastName: state.lastName,
  },
});

export default connect(mapStateToProps, null)(UserHeader);
