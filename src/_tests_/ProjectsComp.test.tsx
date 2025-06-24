import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, vitest } from "vitest";
import ProjectsComp from "../components/ProjectsComp";
import { projectData } from "../Data/Data";

describe("ProjectsComp", () => {
  it("renders the ReusableTitle", () => {
    render(<ProjectsComp />);
    expect(screen.getByTestId("reusable-title")).toHaveTextContent("Projects");
  });

  it("renders all projects with title, description, tech stack and links", () => {
    render(<ProjectsComp />);

    const projectCards = screen.getAllByRole("heading", { level: 2 });

    projectCards.forEach((titleEl, index) => {
      const project = projectData[index];
      const card = titleEl.closest(".project-card") as HTMLElement;
      const utils = within(card);

      // Title and description
      expect(utils.getByText(project.projectTitle)).toBeInTheDocument();
      expect(utils.getByText(project.projectDescription)).toBeInTheDocument();

      // Tech stack
      project.techStackIcons.forEach((tech) => {
        expect(utils.getByAltText(tech.name)).toBeInTheDocument();
      });

      // Links
      const github = utils.getByRole("link", { name: /github/i });
      const live = utils.getByRole("link", { name: "🔗" });

      expect(github).toHaveAttribute("href", project.projectLinks.github);
      expect(live).toHaveAttribute("href", project.projectLinks.live);
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
