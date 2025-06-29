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

  it("renders the battery icon with correct alt text", () => {
    render(<NotificationPanel />);
    const batteryIcon = screen.getByAltText("battery-Icon");
    expect(batteryIcon).toBeInTheDocument();
    expect(batteryIcon.tagName).toBe("IMG");
  });

  it("renders the DigitalClock", () => {
    render(<NotificationPanel />);
    expect(screen.getByTestId("digital-clock")).toBeInTheDocument();
    expect(screen.getByText("12:00 PM")).toBeInTheDocument();
  });
});
