import { LOGIN, LOGIN_SUCCESS, LOGOUT } from "../constants/login";
import { UPDATE_PROFILE, PROFILE_EDITOR_VISIBLE, PROFILE_EDITOR_HIDDEN, GET_PROFILE } from "../constants/edit";

const initialState = {
  isAuth: false,
  token: false,
  firstName: "",
  lastName: "",
  isProfileEditorVisible: false,
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: action.token
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
      };
    case UPDATE_PROFILE:
      console.log(action)
      return {
        ...state,
        firstName: action.firstName,
        lastName: action.lastName,
      };
    case PROFILE_EDITOR_VISIBLE:
      return {
        ...state,
        isProfileEditorVisible: true,
      };
    case PROFILE_EDITOR_HIDDEN:
      return {
        ...state,
        isProfileEditorVisible: false,
      };
    default:
      return state;
  }
};

export default reducers;
