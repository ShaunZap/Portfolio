import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, vitest } from "vitest";
import SkillsComp from "../components/SkillsComp";
import { skillsData } from "../Data/Data";

describe("SkillsComp", () => {
  it("renders the ReusableTitle", () => {
    render(<SkillsComp />);
    expect(screen.getByTestId("reusable-title")).toHaveTextContent("Skills");
  });

  it("renders all MainTitles with correct headings", () => {
    render(<SkillsComp />);
    expect(
      screen.getByRole("heading", { name: "Front-End Development" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Back-End Development" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Databases" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Other Tools & Technologies" })
    ).toBeInTheDocument();
  });

  it("renders all skills in SkillCardGenerator correctly", () => {
    render(<SkillsComp />);

    const allSkills = [
      ...skillsData.frontendData,
      ...skillsData.backEndData,
      ...skillsData.databaseData,
      ...skillsData.otherToolsData,
    ];

    const skillCards = screen.getAllByTestId("skill-cards");

    allSkills.forEach((skill, index) => {
      const card = skillCards[index];
      const utils = within(card);

      // Title
      expect(utils.getByText(skill.title)).toBeInTheDocument();

      // Proficiency
      const proficiencylvlID = `${skill.title}+${skill.proficiency.level}`;
      const proficiencyEl = utils.getByTestId(proficiencylvlID);
      expect(proficiencyEl).toBeInTheDocument();
      expect(proficiencyEl).toHaveTextContent(skill.proficiency.level);

      expect(
        utils.getByText(`${skill.proficiency.percentage}%`)
      ).toBeInTheDocument();

      // Highlights
      skill.highlights.forEach((highlight) => {
        expect(utils.getByText(highlight)).toBeInTheDocument();
      });

      // External link
      expect(
        utils.getByText(`more info on ${skill.title}`)
      ).toBeInTheDocument();
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
