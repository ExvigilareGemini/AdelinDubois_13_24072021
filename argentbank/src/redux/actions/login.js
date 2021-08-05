import * as types from "../constants/login";

export const loginAction = (token) => {
  return {
    type: types.LOGIN,
    token,
  };
};
