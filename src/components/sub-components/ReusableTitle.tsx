import { div as MDiv } from "motion/react-client";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

import "../../GlobalStyles.css";

const ReusableTitle = ({ title }: { title: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile900 = useMediaQuery({ query: "(max-width: 900px)" });
  const isMobile600 = useMediaQuery({ query: "(max-width: 600px)" });

  useEffect(() => {
    const letters = containerRef.current?.querySelectorAll(".letter");
    if (letters) {
      letters.forEach((letter, index) => {
        const el = letter as HTMLElement;
        if (typeof el.animate === "function") {
          el.animate(
            [
              { opacity: 0, transform: "translateY(30px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            {
              delay: index * 80,
              duration: 700,
              easing: "ease-out",
              fill: "forwards",
            }
          );
        }
      });
    }
  }, [title]);

  return (
    <div>
      <MDiv
        data-testid="reusable-title"
        ref={containerRef}
        style={{
          fontFamily: '"Monoton", sans-serif',
          fontSize: isMobile600 ? "40px" : isMobile900 ? "80px" : "120px",
          fontWeight: "500",
          padding: isMobile600 ? "10px" : "20px",
          color: "var(--color-primary-peach)",
          backgroundColor: "var(--color-brand-1000)",
          letterSpacing: "10px",
          gap: "5px",
        }}
      >
        {title.split("").map((char, i) => (
          <span
            key={i}
            className="letter"
            data-testid={char === " " ? "letter-space" : "letter"}
            style={{ opacity: 0 }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </MDiv>
    </div>
  );
};

export default ReusableTitle;
