import { useEffect } from "react";
import "../css/calendar_Clock.css";
import { useDispatch, useSelector } from "react-redux";

function Clock() {
  let state = useSelector((state) => state.timeReducer);
  let dispatch = useDispatch();

  useEffect(() => {
    const timeId = setInterval(() => {
      dispatch({ type: "시간가져오기" });
    }, 30000);
    return () => clearInterval(timeId);
  }, []);

  const emojis = [
    "😁",
    "😐",
    "😣",
    "😊",
    "🤭",
    "😇",
    "🥳",
    "😆",
    "😋",
    "😎",
    "🥰",
  ];
  function randomEmoji() {
    return parseInt(Math.random() * emojis.length);
  }
  return (
    <section className="clock-wrapper">
      <p>{state}</p>
      <span>{emojis[randomEmoji()]}</span>
    </section>
  );
}

export default Clock;
