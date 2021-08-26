import * as types from "../constants/login";
import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:3001/api/v1/user";

export const loginAction = (username, password) => {
  return async (dispatch) => {
    dispatch({ type: types.LOGIN });
    try {
      const body = {
        email: username,
        password: password,
      };
      const answer = await Axios.post(`/login`, body);
      dispatch(loginSuccess(answer.data.body.token));
    } catch (err) {
      err.message.includes("Network Error")
        ? alert("Error 404, server error")
        : alert("Error 400, wrong email or password");
    }
  };
};

export const loginSuccess = (token) => {
  return {
    type: types.LOGIN_SUCCESS,
    token,
  };
};

export const logoutAction = () => {
  return {
    type: types.LOGOUT,
  };
};
