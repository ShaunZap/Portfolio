import { render, screen } from "@testing-library/react";
import { describe, expect, it, vitest } from "vitest";
import App from "../App";

vitest.mock("../Layout", () => ({
  default: () => <div data-testid="layout-mock">Layout Component</div>,
}));

describe("App", () => {
  it("renders Layout component inside App", () => {
    render(<App />);
    expect(screen.getByTestId("layout-mock")).toBeInTheDocument();
  });
});
