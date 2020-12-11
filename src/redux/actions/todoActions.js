import * as actions from "./actionTypes";

export const addTodo = (content) => ({
  type: actions.ADD_TODO,
  payload: { content },
});

export const removeTodo = (id) => ({
  type: actions.REMOVE_TODO,
  payload: { id },
});

export const updateTodo = (id) => ({
  type: actions.UPDATE_TODO,
  payload: { id },
});

export const clearList = () => ({
  type: actions.CLEAR_LIST,
});
