import React, { useEffect } from "react";
import AddTodo from "./components/AddTodo";
import Panel from "./components/Panel";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";

const App = () => {
  const todos = useSelector((state) => state.todoReducer);
  const modalActive = useSelector((state) => state.globalReducer.modalActive);

  const compare = (obj) => {
    if (obj.important && !obj.completed) return 4;
    if (!obj.important && !obj.completed) return 3;
    if (obj.completed && obj.important) return 2;
    if (obj.completed && !obj.important) return 1;
  };

  todos.sort((a, b) => compare(b) - compare(a));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className={modalActive ? "container hide" : "container"}>
      <AddTodo />
      <Panel />
      <TodoList />
    </div>
  );
};

export default App;
