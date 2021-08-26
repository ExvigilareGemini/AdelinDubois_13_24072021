import * as types from "../constants/edit";
import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:3001/api/v1/user";

export const updateProfileAction = (firstName, lastName) => {
  return {
    type: types.UPDATE_PROFILE,
    firstName: firstName,
    lastName: lastName,
  };
};

export const getProfileDatas = (token) => {
  return async (dispatch) => {
    try {
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const answer = await Axios.post(`/profile`, {}, header);
      dispatch(
        updateProfileAction(
          answer.data.body.firstName,
          answer.data.body.lastName
        )
      );
    } catch (err) {
      alert(err);
    }
  };
};

export const editProfileDatas = (firstName, lastName, token) => {
  console.log(firstName);
  return async (dispatch) => {
    try {
      const body = {
        firstName: firstName,
        lastName: lastName,
      };
      const header = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const answer = await Axios.put(`/profile`, body, header);
      dispatch(
        updateProfileAction(
          answer.data.body.firstName,
          answer.data.body.lastName
        )
      );
      console.log(answer);
    } catch (err) {
      alert(err);
    }
  };
};

export const setProfileEditorVisible = () => {
  return {
    type: types.PROFILE_EDITOR_VISIBLE,
  };
};

export const setProfileEditorHidden = () => {
  return {
    type: types.PROFILE_EDITOR_HIDDEN,
  };
};
