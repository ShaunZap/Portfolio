import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, vitest } from "vitest";
import EducationComp from "../components/EducationComp";
import { educationData } from "../Data/Data";

describe("EducationComp", () => {
  //Reusable title
  it('renders the ReusableTitle with text "Education"', () => {
    render(<EducationComp />);
    expect(screen.getByTestId("reusable-title")).toHaveTextContent("Education");
  });

  //Main Title
  it("renders all MainTitles with correct headings", () => {
    render(<EducationComp />);
    expect(
      screen.getByRole("heading", { name: "Education Timeline" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Online Certifications" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Educational Institutions" })
    ).toBeInTheDocument();
  });

  //Timeline section
  it("renders all timeline entries with degree, institution, duration, and GPA", () => {
    render(<EducationComp />);
    Object.values(educationData.timelineData).forEach((edu) => {
      expect(screen.getByText(edu.degree)).toBeInTheDocument();

      const institutionId = `${edu.degree}-${edu.institution}`;
      const institutionEl = screen.getByTestId(institutionId);
      expect(institutionEl).toBeInTheDocument();
      expect(institutionEl).toHaveTextContent(edu.institution);

      expect(screen.getByText(edu.duration)).toBeInTheDocument();
      expect(screen.getByText(`CGPA: ${edu.gpa}`)).toBeInTheDocument();
      edu.highlights.forEach((highlight) => {
        expect(screen.getByText(highlight)).toBeInTheDocument();
      });
    });
  });
  it("renders one icon per timeline entry", () => {
    render(<EducationComp />);
    const icons = screen.getAllByAltText("timelineicon");
    expect(icons.length).toBe(Object.keys(educationData.timelineData).length);
  });

  //Certification Section
  it("renders all certifications with title, author, description, and tags", () => {
    render(<EducationComp />);
    Object.values(educationData.certificationData).forEach((cert, key) => {
      expect(screen.getByText(cert.courseName)).toBeInTheDocument();
      const authorID = `${key}-${cert.authorName}`;
      const authorEl = screen.getByTestId(authorID);
      expect(authorEl).toBeInTheDocument();
      expect(authorEl).toHaveTextContent(cert.authorName);
      expect(screen.getByText(cert.description)).toBeInTheDocument();
      cert.tags.forEach((tag, index) => {
        const testId = `${index}-${tag}-${cert.courseName}`;
        const el = screen.getByTestId(testId);
        expect(el).toBeInTheDocument();
        expect(el).toHaveTextContent(tag);
      });
    });
  });

  //Institution
  it("renders all institutions with title, email, address, link", () => {
    render(<EducationComp />);
    Object.values(educationData.institutionData).forEach((institution, key) => {
      expect(
        screen.getByTestId(institution.institutionName)
      ).toBeInTheDocument();
      expect(screen.getByText(institution.email)).toBeInTheDocument();

      const addressID = `${key}-${institution.address}`;
      const addressEl = screen.getByTestId(addressID);
      expect(addressEl).toBeInTheDocument();
      expect(addressEl).toHaveTextContent(institution.address);
    });
  });

  it("renders icons for institution", () => {
    render(<EducationComp />);

    educationData.institutionData.forEach((inst) => {
      const icon = screen.getByTestId(inst.institutionName);
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveAttribute("src", expect.stringContaining(".svg"));
      expect(icon).toHaveAttribute("alt", inst.institutionName);
    });
  });

  it("renders website link for institution", () => {
    render(<EducationComp />);

    const institutionCards = screen.getAllByTestId("institution-card");

    institutionCards.forEach((card, index) => {
      const institution = educationData.institutionData[index];
      const utils = within(card);
      const link = utils.getByRole("link", { name: /visit website/i });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", institution.websiteLink);
    });
  });
});

vitest.mock("motion/react-client", () => ({
  div: ({
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
