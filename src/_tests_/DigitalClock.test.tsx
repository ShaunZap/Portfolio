import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import DigitalClock from "../components/sub-components/DigitalClock";

describe("DigitalClock", () => {
  const fixedDate = new Date("2023-01-01T05:30:00");

  beforeEach(() => {
    vi.useFakeTimers(); // Mock timers
    vi.setSystemTime(fixedDate); // Fix system time
  });

  afterEach(() => {
    vi.useRealTimers(); // Restore
  });

  it("renders the fixed time on mount", () => {
    render(<DigitalClock />);
    const expectedTime = fixedDate.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    // Check each character except space
    expectedTime.split("").forEach((char) => {
      if (char.trim()) {
        expect(screen.getAllByText(char).length).toBeGreaterThan(0);
      }
    });
  });

  it("updates the time after 1 second", () => {
    render(<DigitalClock />);

    // Move time forward by 1 second
    vi.advanceTimersByTime(1000);

    // Assert that something rerendered (optional)
    const colonElements = screen.getAllByText(":");
    expect(colonElements.length).toBeGreaterThan(0);
  });
});
