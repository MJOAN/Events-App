import { MODAL_CLOSE, MODAL_OPEN } from "./modalConstants";

export const openModal = (modalType, modalProps) => {
  return {
    // all actions must have a type some can have payload
    type: MODAL_OPEN,
    payload: {
      modalType,
      modalProps
    }
  };
};

export const closeModal = () => {
  return {
    type: MODAL_CLOSE
  };
};
