// import React, {useState} from 'react'
import { createStore, combineReducers } from "redux";

let clock = new Date();

function timeReducer(state = clock, action) {
  if (action.type === "시간가져오기") {
    state = new Date();
    const hours = state.getHours();
    const amPm = hours < 12 ? "AM" : "PM";
    const minutes = String(state.getMinutes()).padStart(2, "0");
    state = `${hours} : ${minutes} ${amPm}`;
    console.log(state);
    return state;
  } else {
    const hours = state.getHours();
    const amPm = hours < 12 ? "AM" : "PM";
    const minutes = String(state.getMinutes()).padStart(2, "0");
    state = `${hours} : ${minutes} ${amPm}`;
    return state;
  }
}

const store = createStore(timeReducer);
export default store;
