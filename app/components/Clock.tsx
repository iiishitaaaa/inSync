"use client";

import { useEffect, useState } from "react";

function addZero(x: number) {
  if (x < 10) return "0" + x.toString();
  return x.toString();
}

export default function Clock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    setInterval(() => {
      let today = new Date();
      let hours = today.getHours();
      let minutes = today.getMinutes();
      let seconds = today.getSeconds();

      let time =
        addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
      setTime(time);
    }, 1000);
  }, []);
  return <div className="text-8xl text-[#dcbd6f] font-bold">{time}</div>;
}
