import ReusableTitle from "./sub-components/ReusableTitle";
import "../styles/SkillComp.css";
import frontEndIcon from "../assets/images/webdevIcons/frontend.svg";
import backEndIcon from "../assets/images/webdevIcons/backend.svg";
import databaseIcon from "../assets/images/webdevIcons/db.svg";
import otherToolsIcon from "../assets/images/webdevIcons/tools.svg";
import externalLinkIcon from "../assets/images/miscellaneous/el.svg";
import { skillsData } from "../Data/Data";
import { Skill } from "../types/type";
import { div as MDiv } from "motion/react-client";
import {
  defaultSpring,
  fadeIn,
  smallAnimations,
} from "../animations/animation";

const SkillsComp = () => {
  const { frontendData, databaseData, backEndData, otherToolsData } =
    skillsData;
  return (
    <div>
      <ReusableTitle title={"Skills"} />
      <MainTitle title={"Front-End Development"} Icon={frontEndIcon} />
      <SkillCardGenerator data={frontendData} />
      <MainTitle title={"Back-End Development"} Icon={backEndIcon} />
      <SkillCardGenerator data={backEndData} />
      <MainTitle title={"Databases"} Icon={databaseIcon} />
      <SkillCardGenerator data={databaseData} />
      <MainTitle title={"Other Tools & Technologies"} Icon={otherToolsIcon} />
      <SkillCardGenerator data={otherToolsData} />
    </div>
  );
};
export default SkillsComp;

const MainTitle = ({ title, Icon }: { title: string; Icon: string }) => {
  return (
    <MDiv className="skill-main-title">
      <img src={Icon} alt="Icon" className="iconImage" />
      <h2>{title}</h2>
    </MDiv>
  );
};

const SkillCardGenerator = ({ data }: { data: Skill[] }) => {
  return (
    <div className="outer-container">
      {Object.entries(data).map(([key, value]) => (
        <MDiv
          initial={fadeIn.initialy}
          whileInView={fadeIn.whileInViewy}
          whileHover={smallAnimations.whileHover}
          transition={defaultSpring}
          className="skill-card"
          key={key}
        >
          <div className="skill-card-title">
            <img src={value.icon} alt={value.title} />
            <h4>{value.title}</h4>
          </div>
          <div className="proficiency-section">
            <div className="proficiency-info">
              <div className="title">Proficiency Level:</div>
              <div className="proficiency-level">{value.proficiency.level}</div>
            </div>
            <div className="proficiency-bar">
              <div
                className="progress"
                style={{ width: `${value.proficiency.percentage}%` }}
              ></div>
            </div>
            <div className="proficiency-percentage">
              {value.proficiency.percentage}%
            </div>
          </div>
          <div className="skill-card-info-section">
            <div className="skill-card-info">{value.description}</div>
            <div className="highlights">
              {value.highlights.map((highlight, index) => (
                <div className="highlight" key={index}>
                  {highlight}
                </div>
              ))}
            </div>
          </div>
          <div className="more-info-button">
            <a
              href={value.moreInfoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>more info on {value.title}</div>
              <img src={externalLinkIcon} alt="icon" />
            </a>
          </div>
        </MDiv>
      ))}
    </div>
  );
};
