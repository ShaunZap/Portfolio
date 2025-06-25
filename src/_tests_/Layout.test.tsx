import { describe, it, expect, vi } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Layout from "../Layout";

// Mock dependencies
vi.mock("../components/NotificationPanel", () => ({
  default: () => <div data-testid="notification-panel">MockNotification</div>,
}));

vi.mock("../components/Footer", () => ({
  default: () => <div data-testid="footer">MockFooter</div>,
}));

// Mock route components
vi.mock("../components/AboutComp", () => ({
  default: () => <div>About Page</div>,
}));
vi.mock("../components/EducationComp", () => ({
  default: () => <div>Education Page</div>,
}));
vi.mock("../components/ExperienceComp", () => ({
  default: () => <div>Experience Page</div>,
}));
vi.mock("../components/ProjectsComp", () => ({
  default: () => <div>Projects Page</div>,
}));
vi.mock("../components/SkillsComp", () => ({
  default: () => <div>Skills Page</div>,
}));
vi.mock("../components/MainContentBody", () => ({
  default: () => <div>Home Page</div>,
}));

describe("Layout", () => {
  it("renders layout with footer, notification panel and routes correctly", () => {
    render(
      <MemoryRouter initialEntries={["/projects"]}>
        <Routes>
          <Route path="*" element={<Layout />} />
        </Routes>
      </MemoryRouter>
    );

    // Check static components
    expect(screen.getByTestId("notification-panel")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();

    // Check that the route renders the right component
    expect(screen.getByText("Projects Page")).toBeInTheDocument();
  });

  it("renders page transition overlay", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="*" element={<Layout />} />
        </Routes>
      </MemoryRouter>
    );

    const overlay = document.querySelector("div[style*='position: fixed']");
    expect(overlay).toBeInTheDocument();
  });
});
