import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "../components/Footer";
import { BrowserRouter } from "react-router-dom";

// Helper to wrap component with routing context
const renderWithRouter = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("Footer component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders all three icons", () => {
    renderWithRouter(<Footer />);

    expect(screen.getByTestId("info-icon")).toBeInTheDocument();
    expect(screen.getByTestId("home-icon")).toBeInTheDocument();
    expect(screen.getByTestId("resume-icon")).toBeInTheDocument();
  });

  it("opens modal on info icon click", () => {
    renderWithRouter(<Footer />);
    const infoIcon = screen.getByTestId("info-icon");

    fireEvent.click(infoIcon);

    expect(screen.getByText("Links")).toBeInTheDocument();
    expect(screen.getByText("Linkedin")).toBeInTheDocument();
    expect(screen.getByText("Github")).toBeInTheDocument();
  });

  it("closes modal when 'X' button is clicked", () => {
    renderWithRouter(<Footer />);
    const infoIcon = screen.getByTestId("info-icon");

    fireEvent.click(infoIcon);
    expect(screen.getByText("Links")).toBeInTheDocument();

    fireEvent.click(screen.getByText("X"));
    expect(screen.queryByText("Links")).not.toBeInTheDocument();
  });
});
