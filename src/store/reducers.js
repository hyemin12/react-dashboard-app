// import React, {useState} from 'react'
import { createStore, combineReducers } from "redux";

const initState = {
  clock: new Date(),
  todos: [
    {
      id: 0,
      text: "wordle 기능 추가하기",
      date: " 3월 13일",
      isChecked: false,
    },
    { id: 1, text: "투두리스트 기능", date: " 3월 14일", isChecked: false },
  ],
};

function timeReducer(state = initState.clock, action) {
  if (action.type === "시간가져오기") {
    state = new Date();
    const hours = state.getHours();
    const amPm = hours < 12 ? "AM" : "PM";
    const minutes = String(state.getMinutes()).padStart(2, "0");
    state = `${hours} : ${minutes} ${amPm}`;
    return state;
  } else if (initState.clock === state) {
    const hours = state.getHours();
    const amPm = hours < 12 ? "AM" : "PM";
    const minutes = String(state.getMinutes()).padStart(2, "0");
    state = `${hours} : ${minutes} ${amPm}`;
    return state;
  } else {
    return state;
  }
}

function todoReducer(state = initState.todos, { type, payload }) {
  localStorage.setItem("todos", JSON.stringify(state));
  switch (type) {
    case "ADD_TODO":
      const addTodo = state.concat(payload);
      localStorage.setItem("todos", JSON.stringify(addTodo));
      return addTodo;
    case "REMOVE_TODO":
      const newTodo = state.filter((todo) => todo.id !== payload.id);
      localStorage.setItem("todos", JSON.stringify(newTodo));
      return newTodo;
    case "EDIT_TODO":
      const editTodo = state.map((todo) =>
        todo.id === payload.id ? { ...todo, text: payload.text } : todo
      );
      localStorage.setItem("todos", JSON.stringify(editTodo));
      return editTodo;
    case "checked":
      const checked = state.map((todo) =>
        todo.id === payload.id
          ? { ...todo, isChecked: payload.isChecked }
          : todo
      );
      return checked;
    default:
      return state;
  }
}
const store = createStore(combineReducers({ timeReducer, todoReducer }));
export default store;
