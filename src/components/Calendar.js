import DayPicker from "react-day-picker";
import "../css/calendar_Clock.css";
import "react-day-picker/lib/style.css";

function Calendar() {
  return (
    <section className="calendar-wrapper">
      <DayPicker />
    </section>
  );
}

export default Calendar;
