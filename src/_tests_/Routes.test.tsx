import { describe, expect, it, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { routeList } from "../Routes";

// Mocking each route component's output
vitest.mock("../components/AboutComp", () => ({
  default: () => <div>About Page</div>,
}));
vitest.mock("../components/EducationComp", () => ({
  default: () => <div>Education Page</div>,
}));
vitest.mock("../components/ExperienceComp", () => ({
  default: () => <div>Experience Page</div>,
}));
vitest.mock("../components/ProjectsComp", () => ({
  default: () => <div>Projects Page</div>,
}));
vitest.mock("../components/SkillsComp", () => ({
  default: () => <div>Skills Page</div>,
}));
vitest.mock("../components/MainContentBody", () => ({
  default: () => <div>Main Content Page</div>,
}));

describe("App Routes", () => {
  const testRoute = (path: string, expectedText: string) => {
    const router = createMemoryRouter(routeList, {
      initialEntries: [path],
    });

    render(<RouterProvider router={router} />);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  };

  it("renders main content on '/'", () => {
    testRoute("/", "Main Content Page");
  });

  it("renders about page on '/about'", () => {
    testRoute("/about", "About Page");
  });

  it("renders education page on '/education'", () => {
    testRoute("/education", "Education Page");
  });

  it("renders experience page on '/experience'", () => {
    testRoute("/experience", "Experience Page");
  });

  it("renders projects page on '/projects'", () => {
    testRoute("/projects", "Projects Page");
  });

  it("renders skills page on '/skills'", () => {
    testRoute("/skills", "Skills Page");
  });
});
