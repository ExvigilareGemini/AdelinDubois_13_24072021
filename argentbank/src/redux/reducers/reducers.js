import { LOGIN } from "../constants/login";

const initialState = {
  auth: false,
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        auth: true,
      };
    default:
      return state;
  }
};

export default reducers;
