import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, vi, expect, beforeEach } from "vitest";
import Quotes from "../components/sub-components/Quotes";
import { Quote } from "../types/type";

// Mock data
const mockQuotes: Quote[] = [
  { id: 1, quote: "Test Quote 1", author: "Author 1" },
  { id: 2, quote: "Test Quote 2", author: "Author 2" },
];

// Reset mocks before each test
beforeEach(() => {
  vi.resetAllMocks();
});

// Mock fetch
const mockFetch = (response: unknown, ok = true) => {
  vi.stubGlobal(
    "fetch",
    vi.fn(() =>
      Promise.resolve({
        ok,
        json: () => Promise.resolve(response),
      })
    )
  );
};

describe("Quotes", () => {
  it("renders loading state initially", () => {
    mockFetch([]);
    render(<Quotes />);
    expect(screen.getByText("Loading quotes...")).toBeInTheDocument();
  });

  it("renders fetched quotes correctly", async () => {
    mockFetch(mockQuotes);
    render(<Quotes />);

    // Wait for quotes to be loaded
    await waitFor(() =>
      expect(screen.getByText('"Test Quote 1"')).toBeInTheDocument()
    );

    // Check quotes and authors
    mockQuotes.forEach((q) => {
      expect(screen.getByText(`"${q.quote}"`)).toBeInTheDocument();
      expect(screen.getByText(`- ${q.author}`)).toBeInTheDocument();
    });
  });

  it("handles fetch error and stops loading", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() => Promise.resolve({ ok: false }))
    );

    render(<Quotes />);

    await waitFor(() => {
      expect(screen.queryByText("Loading quotes...")).not.toBeInTheDocument();
    });

    // Since fetch fails, no quote should appear
    expect(screen.queryByText(/quote/i)).not.toBeInTheDocument();
  });
});
