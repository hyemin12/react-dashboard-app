import { useState } from "react";
import { useDispatch } from "react-redux";

import { FaPen } from "react-icons/fa";
import { month, date } from "../status/moment.state.js";

function TodoCreate(props) {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  function handleOnchange(event) {
    let value = event.target.value;
    setValue(value);
  }
  function handleEnter(event) {
    event.preventDefault();
    if (event.key === "Enter") {
      addTodo();
    }
  }
  function addTodo() {
    if (value === "") {
      alert("내용을 입력해주세요!");
    } else {
      dispatch({
        type: "ADD_TODO",
        payload: {
          id: Date.now(),
          text: value,
          date: `${month}월 ${date}일`,
          isChecked: false,
        },
      });
      setValue("");
    }
  }
  return (
    <>
      <div className="todo-create">
        <input
          required
          type="text"
          value={value}
          onKeyPress={handleEnter}
          onChange={handleOnchange}
        />
        <button onClick={addTodo}>
          <FaPen />
        </button>
      </div>
    </>
  );
}

export default TodoCreate;
