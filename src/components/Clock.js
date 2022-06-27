import React from "react";
import { useEffect } from "react";
import "./clock.css";

function Clock({ date, setDate }) {
  useEffect(() => {
    function refreshClock() {
      setDate(new Date());
    }

    const timerId = setInterval(refreshClock, 1000);

    return function cleanup() {
      clearInterval(timerId);
    };
  }, [setDate]);

  return <span className="clock-live">{date.toLocaleTimeString()}</span>;
}
export default Clock;
