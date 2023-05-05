import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return <div>{formattedTime}</div>;
}

export default Clock;
