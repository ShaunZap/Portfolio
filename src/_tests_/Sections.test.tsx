import { render, screen } from "@testing-library/react";
import { describe, it, expect, vitest } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Sections from "../components/Sections";
import { sectionLinks } from "../Data/Data";

// Mock motion/react-client

describe("Sections component", () => {
it("renders all section links with correct name and navigation", () => {
  render(
    <MemoryRouter>
      <Sections />
    </MemoryRouter>
  );

  sectionLinks.forEach((section) => {
    // 1. Verify the text label exists
    expect(screen.getByText(section.name)).toBeInTheDocument();

    // 2. Verify the Link exists and has the correct path
    // This now works because the aria-label matches section.name
    const link = screen.getByRole("link", { name: section.name });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", section.link);
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
