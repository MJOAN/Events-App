import { SubmissionError } from "redux-form";
import { LOGIN_USER } from "./authConstants";
import { closeModal } from "../modals/modalActions";

export const login = creds => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(creds.email, creds.password);
      dispatch(closeModal());
    } catch (error) {
      console.log(error);
      throw new SubmissionError({
        _error: error.message
      });
    }
  };
};

export const registerUser = user =>
  async(dispatch, getState, { getFirebase, getFirestore });
const firebase = getFirebase();
const firestore = getFirestore();

try {
  // create user in auth
  // update auth profile
} catch (error) {}
