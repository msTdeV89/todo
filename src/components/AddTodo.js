import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions/todoActions";

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState("");
  const [important, setImportant] = useState(false);

  const setValue = (e) => {
    if (e.target.name === "addTodo") setTask(e.target.value);
    if (e.target.name === "important") setImportant(!important);
  };

  const randomId = () => Math.floor(Math.random() * 9999999999999);

  const viewport = document.querySelector("meta[name=viewport]");

  const inputElement = useRef(null);

  useEffect(() => {
    inputElement.current.onfocus = () => {
      viewport.setAttribute(
        "content",
        viewport.content + ", height=" + window.innerHeight
      );
    };
  });

  return (
    <form
      autoComplete='off'
      onSubmit={(e) => {
        e.preventDefault();
        if (task)
          addTodo({ id: randomId(), task, important, completed: false });
        document.querySelector("form").reset();
        setImportant(false);
        setTask("");
      }}
    >
      <input
        className='add-todo'
        ref={inputElement}
        name='addTodo'
        type='text'
        value={task}
        placeholder='Todo . . .'
        onChange={(e) => setValue(e)}
      />
      <div className='add-todo-option'>
        <label htmlFor='important'>
          <input
            type='checkbox'
            name='important'
            id='important'
            onClick={(e) => setValue(e)}
          />
          <span>Important</span>
        </label>
        <Button
          text='Add'
          type='submit'
          width='90px'
          fz='1rem'
          padding='5px 0'
          br='10px'
        />
      </div>
    </form>
  );
};

export default connect(null, { addTodo })(AddTodo);
