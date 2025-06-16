import { div as MDiv } from "motion/react-client";
import "../../GlobalStyles.css";

const ReusableTitle = ({ title }: { title: string }) => {
  return (
    <div>
      <MDiv
        style={{
          fontSize: "180px",
          fontWeight: "500",
          padding: "20px",
          color: "var(--color-primary-peach)",
          backgroundColor: "var(--color-brand-1000)",
          letterSpacing: "10px",
        }}
      >
        {title}
      </MDiv>
    </div>
  );
};

export default ReusableTitle;
