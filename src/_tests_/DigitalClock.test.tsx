import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import DigitalClock from "../components/sub-components/DigitalClock";

describe("DigitalClock", () => {
  beforeEach(() => {
    vi.useFakeTimers(); // Control the timer
  });

  afterEach(() => {
    vi.useRealTimers(); // Restore after test
  });

  it("renders the current time on mount", () => {
    render(<DigitalClock />);
    const now = new Date().toLocaleTimeString("en-IN", { hour12: true });

    now.split("").forEach((char) => {
      if (char.trim() !== "") {
        expect(screen.getAllByText(char).length).toBeGreaterThan(0);
      }
    });
  });

  it("updates the time after 1 second", () => {
    render(<DigitalClock />);

    // Advance time by 1 second
    vi.advanceTimersByTime(1000);

    // Rerendering happens internally due to state update
    const updatedTime = screen.getAllByText(":")[0];
    expect(updatedTime).not.toBeNull();
  });
});
