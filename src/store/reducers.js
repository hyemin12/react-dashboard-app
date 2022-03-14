// import React, {useState} from 'react'
import { createStore, combineReducers } from "redux";

const initState = {
  clock: new Date(),
  todos: [
    { id: 0, text: "투두리스트작성", date: " 3월 13일", isChecked: false },
    { id: 1, text: "투두리스트작성", date: " 3월 13일", isChecked: true },
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
  } else {
    const hours = state.getHours();
    const amPm = hours < 12 ? "AM" : "PM";
    const minutes = String(state.getMinutes()).padStart(2, "0");
    state = `${hours} : ${minutes} ${amPm}`;
    return state;
  }
}

function todoReducer(state = initState.todos, { type, payload }) {
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: state.todos.concat({
          id: payload.id,
          text: payload.text,
          date: payload.date,
          isChecked: false,
        }),
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload.id),
      };
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id ? { ...todo, text: payload.text } : todo
        ),
      };
    default:
      return state;
  }
}
const store = createStore(combineReducers({ timeReducer, todoReducer }));
export default store;
