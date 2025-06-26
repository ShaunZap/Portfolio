import { useEffect, useState } from "react";

const getTime = () => {
  const now = new Date();
  return now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

const DigitalClock = () => {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ height: "100%", padding: "2px" }}>
      {time.split("").map((char, index) => (
        <span
          key={index + char}
          style={{
            fontSize: "var(--font-size-small)",
            letterSpacing: "var(--letter-spacing-small)",
            color: "var(--color-primary-peach)",
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default DigitalClock;
