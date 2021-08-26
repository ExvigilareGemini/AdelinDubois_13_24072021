import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  editProfileDatas,
  updateProfileAction,
  setProfileEditorVisible,
  setProfileEditorHidden,
} from "../../redux/actions/edit";

export class UserHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = { firstName: "", lastName: "" };
    this.getFirstName = this.getFirstName.bind(this);
    this.getLastName = this.getLastName.bind(this);
  }

  getFirstName(event) {
    this.setState({ firstName: event.target.value });
  }

  getLastName(event) {
    this.setState({ lastName: event.target.value });
  }

  async updateProfile() {
    this.props.editProfileDatas(
      this.state.firstName === null
        ? this.props.firstName
        : this.state.firstName,
      this.state.lastName === null 
        ? this.props.lastName 
        : this.state.lastName,
      this.props.user.token
    );
    this.props.setProfileEditorHidden()
  }

  render() {
    const { firstName, lastName } = this.props.user;
    if (this.props.isProfileEditorVisible) {
      return (
        <div className="header">
          <h1 className="inputTitle">Welcome back</h1>
          <div className="inputContainer">
            <input
              className="inputName"
              type="text"
              placeholder={firstName}
              onChange={this.getFirstName}
            />
            <input
              className="inputName"
              type="text"
              placeholder={lastName}
              onChange={this.getLastName}
            />
          </div>
          <div className="buttonContainer">
            <button
              className="edit-button save-button"
              onClick={() => this.updateProfile()}
            >
              Save
            </button>
            <button
              className="edit-button save-button"
              onClick={this.props.setProfileEditorHidden}
            >
              Cancel
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="header">
        <h1>
          Welcome back
          <br />
          {firstName} {lastName} !
        </h1>
        <button
          className="edit-button"
          onClick={this.props.setProfileEditorVisible}
        >
          Edit Name
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: {
    firstName: state.firstName,
    lastName: state.lastName,
    token: state.token,
  },
  isProfileEditorVisible: state.isProfileEditorVisible,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      editProfileDatas,
      updateProfileAction,
      setProfileEditorVisible,
      setProfileEditorHidden,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);
