import { Link } from "react-router-dom";
import { img as MImg, div as MDiv } from "motion/react-client";
import dummyIcon from "../assets/images/dummy.png";
import "../styles/Sections.css";
const Sections = () => {
  const sectionLinks = [
    { name: "About", link: "/about", icon: dummyIcon },
    { name: "Projects", link: "/projects", icon: dummyIcon },
    { name: "Experience", link: "/experience", icon: dummyIcon },
    { name: "Education", link: "/education", icon: dummyIcon },
    { name: "Skills", link: "/skills", icon: dummyIcon },
  ];
  return (
    <div className="section-layout">
      {sectionLinks.map((data, index) => (
        <MDiv whileHover={{ scale: 1.05 }} className="section-container">
          <Link key={index} to={data.link} className="section-link">
            <MImg src={data.icon} alt={data.name} className="section-icon" />
          </Link>
          <div className="section-name">{data.name}</div>
        </MDiv>
      ))}
    </div>
  );
};

export default Sections;
