import React from "react";
import { FaTrash } from "react-icons/fa";
import { connect } from "react-redux";
import { removeTodo, updateTodo } from "../redux/actions/todoActions";

const Todo = ({ id, task, completed, important, removeTodo, updateTodo }) => {
  return (
    <div
      className={
        completed && important
          ? "todo completed important"
          : important
          ? "todo important"
          : completed
          ? "todo completed"
          : "todo"
      }
    >
      <p className='todo-name' onClick={() => updateTodo(id)}>
        {task}
      </p>
      <FaTrash className='trash' onClick={() => removeTodo(id)} />
    </div>
  );
};

export default connect(null, { removeTodo, updateTodo })(Todo);
