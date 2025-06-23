import { div as MDiv } from "motion/react-client";
import { useEffect, useRef } from "react";
import "../../GlobalStyles.css";

const ReusableTitle = ({ title }: { title: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

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
          fontSize: "180px",
          fontWeight: "500",
          padding: "20px",
          color: "var(--color-primary-peach)",
          backgroundColor: "var(--color-brand-1000)",
          letterSpacing: "10px",
          gap: "5px",
        }}
      >
        {title.split("").map((char, i) => (
          <span key={i} className="letter" style={{ opacity: 0 }}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </MDiv>
    </div>
  );
};

export default ReusableTitle;
