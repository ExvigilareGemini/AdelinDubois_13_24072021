import * as types from "../constants/login";

export const loginAction = (token) => {
  return {
    type: types.LOGIN,
    token,
  };
};
export const logoutAction = () => {
  return {
    type: types.LOGOUT,
  };
};
export const updateProfileAction = (firstName, lastName) => {
  return {
    type: types.UPDATE_PROFILE,
    firstName: firstName,
    lastName: lastName,
  };
};
