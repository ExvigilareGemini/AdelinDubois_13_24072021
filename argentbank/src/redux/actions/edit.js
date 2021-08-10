import * as types from "../constants/edit";

export const updateProfileAction = (firstName, lastName) => {
    return {
      type: types.UPDATE_PROFILE,
      firstName: firstName,
      lastName: lastName,
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
  
