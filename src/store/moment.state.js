const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const date = String(today.getDate()).padStart(2, "0");
const day = today.getDay();
const dayko = ["일", "월", "화", "수", "목", "금", "토"];
const week = dayko[day];
export { year, month, date, week };
