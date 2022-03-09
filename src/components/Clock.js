import { useEffect, useState } from "react";
import "../css/calendar_Clock.css";

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timeId = setInterval(() => {
      setTime(new Date());
    }, 30000);
    return () => clearInterval(timeId);
  }, []);
  let hours = time.getHours();
  let amPm = hours < 12 ? "AM" : "PM";
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const getTime = hours + ":" + minutes + " " + amPm;
  console.log(getTime);
  return (
    <section className="clock-wrapper">
      <p>{getTime}</p>
    </section>
  );
}

export default Clock;
