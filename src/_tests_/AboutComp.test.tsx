import { render, screen } from "@testing-library/react";
import AboutComp from "../components/AboutComp";
import { AboutData } from "../Data/Data";
import { describe, it, expect } from "vitest";

describe("AboutComp", () => {
  it('renders the ReusableTitle with text "About"', () => {
    render(<AboutComp />);
    expect(screen.getByTestId("reusable-title")).toHaveTextContent("About");
  });

  it("renders the profile image", () => {
    render(<AboutComp />);
    const image = screen.getByAltText("shaun-image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", AboutData.profilePic);
  });

  it("renders the main description", () => {
    render(<AboutComp />);
    expect(screen.getByTestId("about-desc")).toHaveTextContent(
      "Hey there, I'm Shaun Barreto"
    );
  });

 it("renders the hobbies subtitle and description", () => {
  render(<AboutComp />);  
  expect(screen.getByText(/Side Quests/i)).toBeInTheDocument();  
  expect(screen.getByTestId("hobbie-desc")).toHaveTextContent(
    'When I’m not battling bugs or explaining to people that "React" is not just an emotional state'
  );
});

  it("renders all hobby categories and items", () => {
    render(<AboutComp />);
    Object.values(AboutData.hobbies).forEach((category) => {
      expect(screen.getByText(category.title)).toBeInTheDocument();
      category.items.forEach((item, index) => {
        const testId = `hobby-${item}-${index}-${category.title}`;
        const el = screen.getByTestId(testId);
        expect(el).toBeInTheDocument();
        expect(el).toHaveTextContent(item);
      });
    });
  });
});
