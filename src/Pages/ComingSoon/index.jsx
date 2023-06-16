import { useState } from "react";
import { useEffect } from "react";

const ComingSoon = () => {
  const [expired, setExpired] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

  useEffect(() => {
    // Update the count down every 1 second
    const countdownClock = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const daysCal = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hoursCal = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutesCal = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const secondsCal = Math.floor((distance % (1000 * 60)) / 1000);
      setDays(daysCal);
      setHours(hoursCal);
      setMinutes(minutesCal);
      setSeconds(secondsCal);
      if (distance < 0) {
        clearInterval(countdownClock);
        setExpired(true);
      }
    }, 1000);
  }, []);

  return (
    <div className="card">
      <div id="bgImg">
        <div className="middle">
          <h1>COMING SOON</h1>
          <hr />
          <p id="timer">
            {expired
              ? "EXPIRED"
              : `${days} d ${hours} h ${minutes} m ${seconds} s`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
