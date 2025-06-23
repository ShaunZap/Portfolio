import ReusableTitle from "./sub-components/ReusableTitle";
import "../styles/EducationComp.css";
import eduIcon from "../assets/images/miscellaneous/education.svg";
import certificateIcon from "../assets/images/miscellaneous/online-certificate.svg";
import institutionIcon from "../assets/images/miscellaneous/institution.svg";
import emailIcon from "../assets/images/miscellaneous/email.svg";
import { educationData } from "../Data/Data";
import { div as MDiv } from "motion/react-client";
import {
  defaultSpring,
  fadeIn,
  smallAnimations,
} from "../animations/animation";
const EducationComp = () => {
  return (
    <div>
      <ReusableTitle title={"Education"} />
      <MainTitle title={"Education Timeline"} Icon={eduIcon} />
      <TimelineSection />
      <MainTitle title={"Online Certifications"} Icon={certificateIcon} />
      <CertificationCard />
      <MainTitle title={"Educational Institutions"} Icon={institutionIcon} />
      <InstitutionCard />
    </div>
  );
};
export default EducationComp;

const MainTitle = ({ title, Icon }: { title: string; Icon: string }) => {
  return (
    <MDiv className="education-title">
      <img src={Icon} alt="Icon" className="iconImage" />
      <h2>{title}</h2>
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
            <h5>{cert.authorName}</h5>
          </div>
          <div className="certification-card-content">{cert.description}</div>
          <div className="certification-card-tags">
            {cert.tags.map((tag, index) => (
              <div key={index}>{tag}</div>
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
            <img src={eduIcon} alt="icon" className="timelineIcon" />
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
            <div className="institution">{edu.institution}</div>
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
        >
          <div className="institution-card-title">
            <img src={inst.institutionIcon} alt="icon" />
            <div>{inst.institutionName}</div>
          </div>
          <div className="email">
            <img src={emailIcon} alt="icon" />
            <div>{inst.email}</div>
          </div>
          <div className="address">{inst.address}</div>
          <div className="link">
            <a
              href={inst.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website 🔗
            </a>
          </div>
        </MDiv>
      ))}
    </div>
  );
};
