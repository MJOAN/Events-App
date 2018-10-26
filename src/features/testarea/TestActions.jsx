import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";

export const incrementCounter = () => {
  return {
    // all actions must have a type some can have payload
    type: INCREMENT_COUNTER
  };
};

export const decrementCounter = () => {
  return {
    type: DECREMENT_COUNTER
  };
};
