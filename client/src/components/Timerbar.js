import { useState, useEffect } from "react";

const TimerBar = ({ duration = 900 }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsFinished(true);
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const progress = ((duration - timeLeft) / duration) * 100;

  return (
    <>
      <div
        style={{
          height: "4px",
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          background: "#dfe6e9", // светло-серый фон
          zIndex: 9999,
        }}>
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "#74b9ff", // спокойный синий
            transition: "width 1s linear",
          }}></div>
      </div>

      {isFinished && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            textAlign: "center",
            fontSize: "18px",
            color: "#2ecc71", // зелёный
          }}>
          ✅ Вы провели сегодня 15 минут за учёбой. Так держать!
        </div>
      )}
    </>
  );
};

export default TimerBar;
