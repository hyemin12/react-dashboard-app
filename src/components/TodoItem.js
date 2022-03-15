import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaPen, FaTrash, FaCheck, FaCheckCircle } from "react-icons/fa";

function TodoItem(props) {
  const dispatch = useDispatch();
  const [readOnly, setReadOnly] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);

  function isChecked() {
    dispatch({
      type: "checked",
      payload: { id: props.todo.id, isChecked: !props.todo.isChecked },
    });
  }
  function removeTodo() {
    dispatch({ type: "REMOVE_TODO", payload: { id: props.todo.id } });
  }
  function editTodo() {
    setIsEditMode(!isEditMode);
    setReadOnly(true);
    dispatch({
      type: "EDIT_TODO",
      payload: { id: props.todo.id, text: props.todo.value },
    });
  }
  return (
    <>
      <div className="todo-item">
        <button onClick={isChecked}>
          {!props.todo.isChecked ? (
            <FaCheck className="checkbox" />
          ) : (
            <FaCheck className="checkbox checked" />
          )}
        </button>

        <div className="todo-content">
          {props.todo.isChecked ? (
            <input
              type="text"
              readOnly={readOnly}
              value={props.todo.text}
              className="todo-text"
            />
          ) : (
            <input
              type="text"
              readOnly={readOnly}
              value={props.todo.text}
              className="todo-text checked"
            />
          )}
          {isEditMode ? (
            <button onClick={editTodo}>수정완료</button>
          ) : (
            <div className="btn-group">
              <button
                onClick={() => {
                  setIsEditMode(!isEditMode);
                  setReadOnly(false);
                }}
              >
                <FaPen />
              </button>
              <button onClick={removeTodo}>
                <FaTrash />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default TodoItem;
