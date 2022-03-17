import { useState } from "react";
import DayPicker, { DayClickEventHandler } from "react-day-picker";
import { useSelector } from "react-redux";
import AddPlan from "./AddPlan";
import "react-day-picker/lib/style.css";
import "./calendar.css";
import Schedule from "./Schedule";

function Calendar() {
  const plans = useSelector((state) => state.planReducer);
  const [isPlan, setIsPlan] = useState(false);
  function handleDay(event) {
    const y = event.getFullYear();
    const m = event.getMonth() + 1;
    const d = event.getDate();
    const selected = `${y}, ${m}, ${d}`;
    console.log(selected);
    console.log(plans[0].date);
    if (selected == plans[0].date) {
      setIsPlan(true);
    }
  }
  const highlight = plans.map((plan) => new Date(plan.date));
  console.log(plans);
  console.log(highlight);
  return (
    <>
      <section className="calendar-wrapper">
        <DayPicker
          onDayClick={handleDay}
          modifiers={{ highlighted: highlight }}
        />
      </section>
      {/* {isAdd ? <AddPlan selected={selected} /> : null} */}
      {isPlan ? <Schedule highlight={highlight} plans={plans} /> : null}
    </>
  );
}

export default Calendar;
