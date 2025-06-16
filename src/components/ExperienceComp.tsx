import ReusableTitle from "./sub-components/ReusableTitle";
import "../styles/ExperienceComp.css";
import { experienceData } from "../Data/Data";

const ExperienceComp = () => {
  return (
    <div>
      <ReusableTitle title={"Experience"} />
      <div className="outer-card-container">
        {Object.entries(experienceData).map(([key, exp]) => (
          <div className="card-container" key={key}>
            <div className="company-name">{exp.companyName}</div>
            <div className="job-duration">{exp.jobDuration}</div>
            <div className="job-title">{exp.jobTitle}</div>
            <div className="job-description">
              <div>Description</div>
              <p>{exp.jobDescription}</p>
            </div>
            <div className="job-location">
              <div>Location</div>
              <p>{exp.jobLocation}</p>
            </div>
            <div className="tech-stack">
              <div>Tech Stack</div>
              <div className="tech-stack-container">
                {exp.techStack.map((tech, index) => (
                  <p key={index}>{tech}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceComp;
