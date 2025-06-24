import { Link } from "react-router-dom";
import { div as MDiv } from "motion/react-client";
import "../styles/Sections.css";
import { sectionLinks } from "../Data/Data";
const Sections = () => {
  return (
    <div className="section-layout">
      {sectionLinks.map((data, index) => (
        <MDiv
          whileHover={{ scale: 0.9 }}
          className="section-container "
          key={index}
        >
          <Link to={data.link} className="section-link">
            <img src={data.icon} alt={data.name} className="section-icon" />
          </Link>
          <div className="section-name">{data.name}</div>
        </MDiv>
      ))}
    </div>
  );
};

export default Sections;
