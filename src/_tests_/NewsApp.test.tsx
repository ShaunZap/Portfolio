import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import NewsApp from "../components/sub-components/NewsApp";
import { Article } from "../types/type";

const mockArticles: Article[] = [
  {
    title: "Test News 1",
    description: "Description for news 1",
    image: "https://example.com/image1.jpg",
    publishedAt: "2024-06-01T12:00:00Z",
    url: "https://example.com/news1",
  },
  {
    title: "Test News 2",
    description: "Description for news 2",
    image: "https://example.com/image1.jpg",
    publishedAt: "2024-06-02T08:30:00Z",
    url: "https://example.com/news2",
  },
];

beforeEach(() => {
  vi.resetAllMocks();
});

function mockFetch(data: unknown, ok = true) {
  const mockResponse = {
    ok,
    json: () => Promise.resolve(data),
  } as Response;

  vi.stubGlobal(
    "fetch",
    vi.fn(() => Promise.resolve(mockResponse))
  );
}

describe("NewsApp", () => {
  it("renders loading state initially", () => {
    mockFetch({ articles: [] });
    render(<NewsApp />);
    expect(screen.getByText("Loading news...")).toBeInTheDocument();
  });

  it("renders fetched news articles", async () => {
    mockFetch({ articles: mockArticles });

    render(<NewsApp />);

    await waitFor(() =>
      expect(screen.getByText("Test News 1")).toBeInTheDocument()
    );

   for (const article of mockArticles) {
  expect(screen.getByText(article.title)).toBeInTheDocument();
  expect(screen.getByText(article.description)).toBeInTheDocument();


  const links = screen.getAllByRole("link", { name: /more info/i });
  
  const matchingLink = links.find(
    (link) => link.getAttribute("href") === article.url
  );
  expect(matchingLink).toBeTruthy();
}

expect(screen.getAllByText(/more info/i)).toHaveLength(mockArticles.length);
  });

  it("handles fetch error gracefully", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() => Promise.reject(new Error("API failed")))
    );

    render(<NewsApp />);

    await waitFor(() =>
      expect(screen.queryByText("Loading news...")).not.toBeInTheDocument()
    );

    expect(screen.queryByText("Test News 1")).not.toBeInTheDocument();
  });
});
