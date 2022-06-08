import React, { useEffect, useState } from "react";


const TimerV2 = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevState => prevState + 1);
    }, 1000);

    return ()=> clearInterval(timer)

  }, []);

  return (
    <div>
      Result: {seconds} <span style={{fontSize: "15px"}}>(Functional Component)</span>
    </div>
  );
}

export default TimerV2;
