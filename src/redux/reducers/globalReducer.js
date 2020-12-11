import * as actions from "../actions/actionTypes";

const initialState = { modalActive: false, hideCompleted: false };

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.TOGGLE_MODAL:
      return { ...state, modalActive: !state.modalActive };
    case actions.TOGGLE_COMPLETED:
      return { ...state, hideCompleted: !state.hideCompleted };
    default:
      return state;
  }
};

export default globalReducer;
