import ReusableTitle from "./sub-components/ReusableTitle";
import "../styles/EducationComp.css";
import { educationData } from "../Data/Data";
import { div as MDiv } from "motion/react-client";
import {
  defaultSpring,
  fadeIn,
  smallAnimations,
} from "../animations/animation";
import { GraduationCapIcon, University, BadgeCheck, Mail, Link } from "lucide-react";
import { LucideIcon } from "lucide-react";
const EducationComp = () => {
  return (
    <div>
      <ReusableTitle title={"Education"} />
      <MainTitle maintitle={"Lessons, Deadlines & Drama"} Icon={GraduationCapIcon} />
      <TimelineSection />
      <MainTitle maintitle={"Click & Learn Stuff"} Icon={BadgeCheck} />
      <CertificationCard />
      <MainTitle
        maintitle={"The Halls of Homework"}
        Icon={University}
      />
      <InstitutionCard />
    </div>
  );
};
export default EducationComp;

const MainTitle = ({
  maintitle,
  Icon,
}: {
  maintitle: string;
  Icon: LucideIcon;
}) => {
  return (
    <MDiv className="education-title">
      <Icon size={60} strokeWidth={1} color="white"/>
      <h2>{maintitle}</h2>
    </MDiv>
  );
};

const CertificationCard = () => {
  return (
    <div className="certification-container">
      {Object.entries(educationData.certificationData).map(([key, cert]) => (
        <MDiv
          initial={fadeIn.initialy}
          whileInView={fadeIn.whileInViewy}
          transition={defaultSpring}
          whileHover={smallAnimations.shrinkCard}
          className="certification-card"
          key={key}
        >
          <div className="certification-card-title">
            <h4>{cert.courseName}</h4>
            <h5 data-testid={`${key}-${cert.authorName}`}>{cert.authorName}</h5>
          </div>
          <div className="certification-card-content">{cert.description}</div>
          <div className="certification-card-tags">
            {cert.tags.map((tag, index) => (
              <div
                key={index}
                data-testid={`${index}-${tag}-${cert.courseName}`}
              >
                {tag}
              </div>
            ))}
          </div>
        </MDiv>
      ))}
    </div>
  );
};

const TimelineSection = () => {
  return (
    <div className="education-timeline-container">
      {Object.entries(educationData.timelineData).map(([key, edu]) => (
        <div className="timeline-item-container" key={key}>
          <div className="timeline-separator">
            <GraduationCapIcon size={50} color="white" strokeWidth={1} className="timelineImage" />

            <hr />
          </div>
          <MDiv
            initial={fadeIn.initialx}
            whileInView={fadeIn.whileInViewx}
            whileHover={smallAnimations.scaleCard}
            transition={defaultSpring}
            className="timeline-card-grid"
          >
            <div className="degree-title">{edu.degree}</div>
            <div
              className="institution"
              data-testid={`${edu.degree}-${edu.institution}`}
            >
              {edu.institution}
            </div>
            <div className="duration">{edu.duration}</div>
            <div className="gpa">CGPA: {edu.gpa}</div>
            <div className="highlights">
              <ul>
                {edu.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </MDiv>
        </div>
      ))}
    </div>
  );
};

const InstitutionCard = () => {
  return (
    <div className="institution-container">
      {Object.entries(educationData.institutionData).map(([key, inst]) => (
        <MDiv
          initial={fadeIn.initialy}
          whileInView={fadeIn.whileInViewy}
          whileHover={smallAnimations.shrinkCard}
          transition={defaultSpring}
          className="institution-card"
          key={key}
          data-testid="institution-card"
        >
          <div className="institution-card-title">
            <img
              src={inst.institutionIcon}
              alt={inst.institutionName}
              data-testid={inst.institutionName}
            />
            <div>{inst.institutionName}</div>
          </div>
          <div className="email">
            <Mail size={15} strokeWidth={1} color="white" />
            <div>{inst.email}</div>
          </div>
          <div className="address" data-testid={`${key}-${inst.address}`}>
            {inst.address}
          </div>
          <div className="link">
            <a
              href={inst.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>Visit Website</div>
            <Link size={15}/>
            </a>
          </div>
        </MDiv>
      ))}
    </div>
  );
};
