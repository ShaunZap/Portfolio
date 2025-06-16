import { div as MDiv } from "motion/react-client";
import { useState } from "react";
import "../styles/StartBtn.css";

const StartButton = () => {
  const [isPowerOn, setIsPowerOn] = useState(false);

  return (
    <>
      <MDiv
        className="container"
        onClick={() => setIsPowerOn(!isPowerOn)}
        animate={
          isPowerOn
            ? { scale: 0.2, x: 600, y: 250 }
            : { scale: 0.8, x: 0, y: 0 }
        }
        transition={{ type: "spring", stiffness: 30, duration: 0.8 }}
      >
        <MDiv className="outerStartContainer">
          <MDiv className="innerStartContainer">
            <MDiv className="outerPill">
              <MDiv className="innerPill" />
            </MDiv>
          </MDiv>
        </MDiv>
      </MDiv>
    </>
  );
};
export default StartButton;
