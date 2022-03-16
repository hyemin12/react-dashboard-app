import { useState } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import TodoCreate from "./TodoCreate";
import { year, month, date } from "../../store/moment.state";
import "./todolist.css";

function TodoTemplate() {
  let todos = useSelector((state) => state.todoReducer);
  const [todoAdd, setTodoAdd] = useState(false);
  return (
    <section className="todo-wrapper">
      <div className="todos-title-wrapper">
        <div className="todos-title">
          <h1>
            Today is{" "}
            <span className="today-date">
              {year}년 {month}월 {date}일
            </span>
          </h1>
          <h4>가나다라마바사</h4>
        </div>
        <button
          className="btn btn-todo-add"
          onClick={() => {
            setTodoAdd(!todoAdd);
          }}
        >
          Add task
        </button>
      </div>
      {todoAdd ? <TodoCreate todoAdd={todoAdd} /> : null}
      {todos && todos.length !== 0
        ? todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)
        : null}
    </section>
  );
}

export default TodoTemplate;
