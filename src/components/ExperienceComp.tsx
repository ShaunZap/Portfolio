import ReusableTitle from "./sub-components/ReusableTitle";
import "../styles/ExperienceComp.css";
import { experienceData } from "../Data/Data";
import { div as MDiv } from "motion/react-client";
import { fadeIn, defaultSpring } from "../animations/animation";
import { Briefcase } from "lucide-react";

const ExperienceComp = () => {
  return (
    <div>
      <ReusableTitle title={"Experience"} />
      <div className="outer-card-container">
        {Object.entries(experienceData).map(([key, exp]) => (
          <div className="inner-container" key={key}>
            <div className="timeline-container">
              <Briefcase size={40} strokeWidth={1} className="timelineImage" />
              <hr />
            </div>
            <MDiv
              initial={fadeIn.initialx}
              whileInView={fadeIn.whileInViewx}
              transition={defaultSpring}
              className="card-container"
              key={key}
            >
              <div className="company-name">
                Company Name: {exp.companyName}
              </div>
              <div className="job-duration">{exp.jobDuration}</div>
              <div className="job-title">Role: {exp.jobTitle}</div>
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
                    <p key={index} data-testid={`${index}+${tech}`}>
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            </MDiv>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceComp;
