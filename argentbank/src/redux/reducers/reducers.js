import { LOGIN } from "../constants/login";

const initialState = {
  isAuth: false,
  token: false,
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuth: true,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducers;
