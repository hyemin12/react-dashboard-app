import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import "./calendar.css";

function Calendar() {
  return (
    <section className="calendar-wrapper">
      <DayPicker />
    </section>
  );
}

export default Calendar;
