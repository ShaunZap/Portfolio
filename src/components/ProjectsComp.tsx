import "../styles/Projects.css";
import { div as MDiv } from "motion/react-client";
import ReusableTitle from "./sub-components/ReusableTitle";
import { projectData } from "../Data/Data";
import { defaultSpring, fadeIn } from "../animations/animation";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Github, LinkIcon } from "lucide-react";

const ProjectsComp = () => (
  <div>
    <ReusableTitle title="Projects" />
    <div className="project-container">
      {Object.entries(projectData).map(([key, project]) => (
        <MDiv
          initial={fadeIn.initialy}
          whileInView={fadeIn.whileInViewy}
          transition={defaultSpring}
          className="project-card"
          key={key}
        >
          <div className="project-image">
            <img src={project.projectImage} alt="" />
          </div>
          <div className="project-title">
            <hr />
            <h2>{project.projectTitle}</h2>
            <hr />
          </div>
          <div className="project-description">
            {project.projectDescription}
          </div>
          <div className="project-stack">
            {project.techStackIcons.map((tech, index) => (
              <a
                key={index}
                data-tooltip-id="tech-tooltip"
                data-tooltip-content={tech.name}
              >
                <MDiv whileHover={{ rotate: 10 }} className="stack-item">
                  <img src={tech.icon} draggable={false} alt={tech.name} />
                </MDiv>
              </a>
            ))}
            <Tooltip
              id="tech-tooltip"
              place="top"
              className="project-tooltip"
            />
          </div>
          <div className="project-links">
            <MDiv whileHover={{ scale: 0.95 }} className="live">
              <a
                href={project.projectLinks.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon
                  size={30}
                  aria-label="live link"
                  className="live-icon"
                />
              </a>
            </MDiv>
            <MDiv whileHover={{ scale: 0.95 }} className="github">
              <a
                href={project.projectLinks.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github
                  size={30}
                  aria-label="github"
                  className="github-icon"
                />
              </a>
            </MDiv>
          </div>
        </MDiv>
      ))}
    </div>
  </div>
);

export default ProjectsComp;
