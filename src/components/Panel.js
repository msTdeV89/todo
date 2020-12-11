import React from "react";
import Button from "./Button";
import { connect } from "react-redux";
import { toggleModal, toggleCompleted } from "../redux/actions/globalActions";
import { useSelector } from "react-redux";

const Panel = ({ toggleModal, toggleCompleted }) => {
  const hideCompleted = useSelector(
    (state) => state.globalReducer.hideCompleted
  );
  const todos = useSelector((state) => state.todoReducer);
  return (
    <div className='panel'>
      <Button
        text='Clear List'
        width='145px'
        func={() => {
          if (todos.length > 0) toggleModal();
        }}
      />
      <Button
        text={hideCompleted ? "Show Completed" : "Hide Completed"}
        width='145px'
        func={() => {
          const completedTodos = todos.filter(
            (todo) => todo.completed === true
          );
          if (completedTodos.length > 0) toggleCompleted();
        }}
      />
    </div>
  );
};

export default connect(null, { toggleModal, toggleCompleted })(Panel);
