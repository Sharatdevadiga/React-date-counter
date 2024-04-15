import "./styles.css";
import { useState } from "react";

export default function App() {
  const [increment, setIncrement] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  let message =
    count < 0
      ? `${count} days before today was`
      : count === 0
      ? "Today is "
      : `${count} days after today will be`;

  return (
    <div className="container">
      <h2>DATE COUNTER</h2>
      <Step increment={increment} setIncrement={setIncrement} />
      <Count
        increment={increment}
        count={count}
        setCount={setCount}
        date={date}
        setDate={setDate}
      />
      <h3>
        {message}: {date.toDateString()}
      </h3>
      <Footer />
    </div>
  );
}

function Step({ increment, setIncrement }) {
  function handlePlus() {
    setIncrement((i) => i + 1);
  }
  function handleMinus() {
    if (increment > 1) setIncrement((i) => i - 1);
  }

  return (
    <div className="step">
      <button className="btn" onClick={handleMinus}>
        -
      </button>
      <p>Step: {increment}</p>
      <button className="btn" onClick={handlePlus}>
        +
      </button>
    </div>
  );
}

function Count({ increment, count, setCount, date, setDate }) {
  function handlePlus() {
    setCount((c) => {
      if (c === 0) return 1;
      else return c + increment;
    });
    setDateAfterXDays(count + increment);
    console.log(date.toDateString());
  }
  function handleMinus() {
    setCount((c) => c - increment);
    setDateAfterXDays(count - increment);
    console.log(date.toDateString());
  }

  function setDateAfterXDays(x) {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const futureDate = new Date(currentYear, currentMonth, currentDay + x);
    setDate(futureDate);
  }

  return (
    <div className="count">
      <button className="btn" onClick={handleMinus}>
        -
      </button>
      <p>count: {count}</p>
      <button className="btn" onClick={handlePlus}>
        +
      </button>
    </div>
  );
}
function DateMessage() {}

function Footer() {
  return (
    <>
      <hr></hr>
      <p className="copy-right">
        &copy; {new Date().getFullYear()} Sharath devadiga
      </p>
    </>
  );
}
