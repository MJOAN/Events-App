import { LOGIN_USER, SIGN_OUT_USER } from "./authConstants";
import { createReducer } from "../../app/common/util/reducerUtil";

const initialState = {
  currentUser: {}
};

// set state from null to type of what it is
export const loginUser = (state, payload) => {
  return {
    ...state,
    authenticated: true,
    currentuser: payload.creds.email
  };
};

export const signOutUser = (state, payload) => {
  return {
    ...state,
    authenticated: false,
    currentUser: {}
  };
};

export default createReducer(initialState, {
  [LOGIN_USER]: loginUser,
  [SIGN_OUT_USER]: signOutUser
});
