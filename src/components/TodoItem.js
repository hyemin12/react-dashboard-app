import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPen, FaTrash } from "react-icons/fa";

function TodoItem(props) {
  let id = useRef();
  const dispatch = useDispatch();

  function removeTodo() {
    dispatch({ type: "REMOVE_TODO" });
  }
  function editTodo() {}
  return (
    <>
      <div className="todo-item">
        <input type="checkbox" id="todo-check" />
        <label></label>
        <div className="todo-content">
          <div className="todo-text">{props.todo.text}</div>
          <div className="btn-group">
            <button onClick={editTodo}>
              <FaPen />
            </button>
            <button onClick={removeTodo}>
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoItem;
