import * as actions from "../actions/actionTypes";

const getLSdata = () => {
  if (localStorage.getItem("todos")) {
    return JSON.parse(localStorage.getItem("todos"));
  } else {
    localStorage.setItem("todos", JSON.stringify([]));
  }
};

const initialState = getLSdata() ? getLSdata() : [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return [
        ...state,
        {
          ...action.payload.content,
        },
      ];
    case actions.UPDATE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case actions.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    case actions.CLEAR_LIST:
      return state.filter((todo) => todo.important);
    default:
      return state;
  }
};

export default todoReducer;
