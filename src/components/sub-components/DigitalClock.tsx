import { useEffect, useState } from "react";

const getTime = () => {
  const now = new Date();
  return now.toLocaleTimeString("en-IN", { hour12: true });
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
    <div className="flex justify-center items-center h-screen bg-black text-white text-6xl font-mono">
      {time.split("").map((char, index) => (
        <span key={index + char} className="digital-clock">
          {char}
        </span>
      ))}
    </div>
  );
};

export default DigitalClock;
