import ReusableTitle from "./sub-components/ReusableTitle";
import "../styles/SkillComp.css";
import { skillsData } from "../Data/Data";
import { Skill } from "../types/type";
import { div as MDiv } from "motion/react-client";
import {
  defaultSpring,
  fadeIn,
  smallAnimations,
} from "../animations/animation";
import { LayoutGrid, Server, Database, Cloud, SquareArrowUpRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

const SkillsComp = () => {
  const { frontendData, databaseData, backEndData, otherToolsData } =
    skillsData;
  return (
    <div>
      <ReusableTitle title={"Skills"} />
      <MainTitle title={"Front-End Development"} Icon={LayoutGrid} />
      <SkillCardGenerator data={frontendData} />
      <MainTitle title={"Back-End Development"} Icon={Server} />
      <SkillCardGenerator data={backEndData} />
      <MainTitle title={"Databases"} Icon={Database} />
      <SkillCardGenerator data={databaseData} />
      <MainTitle title={"Other Tools & Technologies"} Icon={Cloud} />
      <SkillCardGenerator data={otherToolsData} />
    </div>
  );
};
export default SkillsComp;

const MainTitle = ({ title, Icon }: { title: string; Icon: LucideIcon }) => {
  return (
    <MDiv className="skill-main-title">
      <Icon size={60} strokeWidth={1} color="white"/>
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
          data-testid={`skill-cards`}
        >
          <div className="skill-card-title">
            <img src={value.icon} alt={value.title} />
            <h4>{value.title}</h4>
          </div>
          <div className="proficiency-section">
            <div className="proficiency-info">
              <div className="title">Proficiency Level:</div>
              <div
                className="proficiency-level"
                data-testid={`${value.title}+${value.proficiency.level}`}
              >
                {value.proficiency.level}
              </div>
            </div>
            <div className="proficiency-bar">
              <div
                className="progress"
                style={{ width: `${value.proficiency.percentage}%` }}
              >
                {value.proficiency.percentage}%
              </div>
            </div>
          </div>
          <div className="skill-card-info-section">
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
             <SquareArrowUpRight size={15} color="white" strokeWidth={1} />
            </a>
          </div>
        </MDiv>
      ))}
    </div>
  );
};
