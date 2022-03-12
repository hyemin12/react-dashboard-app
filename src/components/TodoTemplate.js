import { year, month, date } from "../status/moment.state";
import TodoList from "./TodoList";
import "../css/todolist.css";

function TodoTemplate() {
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
        <button className="btn btn-todo-add">Add task</button>
      </div>
      <TodoList />
    </section>
  );
}

export default TodoTemplate;
