import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import MainContentBody from "../components/MainContentBody";

// Mock child components
vi.mock("../components/Sections", () => ({
  __esModule: true,
  default: () => <div data-testid="sections-component">Sections</div>,
}));

vi.mock("../components/sub-components/Quotes", () => ({
  __esModule: true,
  default: () => <div data-testid="quotes-component">Quotes</div>,
}));

vi.mock("../components/sub-components/FlappyBird", () => ({
  __esModule: true,
  default: () => <div data-testid="game-component">FlappyBird</div>,
}));

describe("MainContentBody", () => {
  it("renders Quotes, FlappyBird, and Sections components", () => {
    render(<MainContentBody />);

    expect(screen.getByTestId("quotes-component")).toBeInTheDocument();
    expect(screen.getByTestId("game-component")).toBeInTheDocument();
    expect(screen.getByTestId("sections-component")).toBeInTheDocument();
  });
});
