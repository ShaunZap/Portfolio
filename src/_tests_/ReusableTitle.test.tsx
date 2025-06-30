import { render, screen, within } from "@testing-library/react";
import ReusableTitle from "../components/sub-components/ReusableTitle";
import { describe, it, expect, vitest, beforeAll, beforeEach } from "vitest";

describe("ReusableTitle", () => {
  const testTitle = "Hello World";
  const animateMock = vitest.fn();

  it("renders the component with correct data-testid", () => {
    render(<ReusableTitle title={testTitle} />);
    const reusableTitle = screen.getByTestId("reusable-title");
    expect(reusableTitle).toBeInTheDocument();
  });

  beforeAll(() => {
    HTMLElement.prototype.animate = animateMock;
  });

  beforeEach(() => {
    animateMock.mockClear(); // Reset call history before each test
  });

  it("animates each letter using el.animate", () => {
    render(<ReusableTitle title="Test" />);
    const letters = screen.getAllByTestId("letter");

    // Check that each .letter span triggered an animate call
    expect(animateMock).toHaveBeenCalledTimes(letters.length);
  });

  it("renders each character as a span with class 'letter'", () => {
    render(<ReusableTitle title={testTitle} />);
    const letters = screen.getAllByText(
      (_, el) => el !== null && el?.classList.contains("letter")
    );
    expect(letters.length).toBe(testTitle.length);
  });

  it("renders non-breaking space for spaces", () => {
    render(<ReusableTitle title={testTitle} />);
    const wrapper = screen.getByTestId("reusable-title");
    const space = within(wrapper).getByTestId("letter-space");
    expect(space).toBeInTheDocument();
  });

  it("renders correct characters in order", () => {
    render(<ReusableTitle title={testTitle} />);

    const letters = screen.getAllByText(
      (_, el) => el !== null && el.classList.contains("letter")
    );

    expect(letters.length).toBe(testTitle.length);

    testTitle.split("").forEach((char, i) => {
      const expected = char === " " ? "\u00A0" : char;
      const content = letters[i]?.textContent;

      // Add debug log if something fails
      if (content !== expected) {
        console.error(
          `At index ${i}, expected "${expected}" but got "${content}"`
        );
      }

      expect(content).toBe(expected);
    });
  });
});

vitest.mock("motion/react-client", () => ({
  div: ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    animate,
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
