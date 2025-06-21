import "../styles/Projects.css";
import { div as MDiv } from "motion/react-client";
import ReusableTitle from "./sub-components/ReusableTitle";
import { projectData } from "../Data/Data";
import { defaultSpring, fadeIn } from "../animations/animation";

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
              <MDiv
                whileHover={{ rotate: 10 }}
                className="stack-item"
                key={index}
              >
                <img src={tech.icon} draggable={false} alt={tech.name} />
              </MDiv>
            ))}
          </div>
          <div className="project-links">
            <MDiv whileHover={{ scale: 0.95 }} className="live">
              <a
                href={project.projectLinks.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>🔗</div>
              </a>
            </MDiv>
            <MDiv whileHover={{ scale: 0.95 }} className="github">
              <a
                href={project.projectLinks.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>Github</div>
              </a>
            </MDiv>
          </div>
        </MDiv>
      ))}
    </div>
  </div>
);

export default ProjectsComp;
