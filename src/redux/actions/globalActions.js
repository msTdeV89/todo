import * as actions from "./actionTypes";

export const toggleModal = () => ({
  type: actions.TOGGLE_MODAL,
});

export const toggleCompleted = () => ({
  type: actions.TOGGLE_COMPLETED,
});
