import { MODAL_CLOSE, MODAL_OPEN } from "./modalConstants";
import { createReducer } from "../../app/common/util/reducerUtil";

const initialState = null;

// set state from null to type of what it is
export const openModal = (state, payload) => {
  const { modalType, modalProps } = payload;
  return { modalType, modalProps };
};

export const closeModal = (state, payload) => {
  return null;
};

export default createReducer(initialState, {
  [MODAL_OPEN]: openModal,
  [MODAL_CLOSE]: closeModal
});
