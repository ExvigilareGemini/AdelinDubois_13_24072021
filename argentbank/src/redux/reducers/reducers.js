import { LOGIN } from "../constants/login";

const initialState = {
  auth: false,
  token: false,
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        auth: true,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducers;
