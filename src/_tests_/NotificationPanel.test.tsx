import { render, screen } from "@testing-library/react";
import { describe, it, expect, vitest } from "vitest";
import NotificationPanel from "../components/NotificationPanel";

// Optional: Mock DigitalClock for consistent output
vitest.mock("../components/sub-components/DigitalClock", () => ({
  __esModule: true,
  default: () => <div data-testid="digital-clock">12:00 PM</div>,
}));

describe("NotificationPanel", () => {
  it("renders the title logo", () => {
    render(<NotificationPanel />);
    expect(screen.getByText("Shaun Barreto")).toBeInTheDocument();
  });

});
