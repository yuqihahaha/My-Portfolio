import { useState, useEffect } from "react";

function getTimePeriod(hour) {
    if (hour >= 5 && hour < 8) return "dawn";
    if(hour >=8 && hour < 17) return "day";
    if(hour >= 17 && hour < 20) return "sunset";
    return "night";
  }

  export default function useTimePeriod() {
    const [period, setPeriod] = useState(getTimePeriod(new Date().getHours()));

  // Check the time every minute and update the period if necessary
  useEffect(() => {
    const timer = setInterval(() => {
        setPeriod(getTimePeriod(new Date().getHours()));
    }, 60_000);

    return () => clearInterval(timer);
  }, []);

    return period;
  }