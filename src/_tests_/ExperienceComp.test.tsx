import { render, screen } from "@testing-library/react";
import { describe, it, expect, vitest } from "vitest";
import ExperienceComp from "../components/ExperienceComp";
import { experienceData } from "../Data/Data";

describe("ExperienceComp", () => {
  it("renders the ReusableTitle", () => {
    render(<ExperienceComp />);
    expect(screen.getByTestId("reusable-title")).toHaveTextContent(
      "Experience"
    );
  });

  it("renders all experience entries correctly", () => {
    render(<ExperienceComp />);

    const experiences = Object.values(experienceData);

    // These are repeated in each card, so use getAllByText and check length
    expect(screen.getAllByText("Description")).toHaveLength(experiences.length);
    expect(screen.getAllByText("Location")).toHaveLength(experiences.length);
    expect(screen.getAllByText("Tech Stack")).toHaveLength(experiences.length);

    experiences.forEach((exp) => {
      expect(
        screen.getByText(`Company Name: ${exp.companyName}`)
      ).toBeInTheDocument();
      expect(screen.getByText(exp.jobDuration)).toBeInTheDocument();
      expect(screen.getByText(`Role: ${exp.jobTitle}`)).toBeInTheDocument();
      expect(screen.getByText(exp.jobDescription)).toBeInTheDocument();
      expect(screen.getByText(exp.jobLocation)).toBeInTheDocument();

      exp.techStack.forEach((tech, index) => {
        const techID = `${index}+${tech}`;
        const testel = screen.getByTestId(techID);
        expect(testel).toBeInTheDocument();
        expect(testel).toHaveTextContent(tech);
      });
    });
  });
});

vitest.mock("motion/react-client", () => ({
  div: ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    initial,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    whileInView,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    whileHover,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    transition,
    ...rest
  }: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }) => <div {...rest} />,
}));
