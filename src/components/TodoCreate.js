import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPen } from "react-icons/fa";
import { year, month, date } from "../status/moment.state.js";

function TodoCreate() {
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  function handleEnter(event) {
    event.preventDefault();
    addTodo();
  }
  function addTodo() {
    dispatch({
      type: "EDIT_TODO",
      payload: {
        id: 1,
        text: value,
        date: `${year}년 ${month}월 ${date}일`,
      },
    });
  }
  return (
    <>
      <div className="todo-create">
        <input type="text" onKeyPress={handleEnter} />
        <button onClick={addTodo}>
          <FaPen />
        </button>
      </div>
    </>
  );
}

export default TodoCreate;
