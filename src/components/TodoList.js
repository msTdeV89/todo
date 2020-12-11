import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todoReducer);
  const hideCompleted = useSelector(
    (state) => state.globalReducer.hideCompleted
  );

  const todosList = todos
    .filter((todo) => (hideCompleted ? todo.completed !== true : todo))
    .map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        completed={todo.completed}
        important={todo.important}
      />
    ));

  return (
    <div className='todo-list'>
      {todos.length > 0 ? (
        todosList
      ) : (
        <h2 className='no-tasks'>No tasks at the moment.</h2>
      )}
    </div>
  );
};

export default TodoList;
