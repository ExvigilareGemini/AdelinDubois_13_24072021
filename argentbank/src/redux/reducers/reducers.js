import { LOGIN, LOGOUT, UPDATE_PROFILE } from "../constants/login";

const initialState = {
  isAuth: false,
  token: false,
  firstName: "",
  lastName: "",
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuth: true,
        token: action.token,
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        firstName: action.firstName,
        lastName: action.lastName,
      };
    default:
      return state;
  }
};

export default reducers;
