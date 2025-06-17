import { div as MDiv, img as MImg } from "motion/react-client";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import homeIcon from "../assets/images/miscellaneous/home.svg";
import resumeIcon from "../assets/images/miscellaneous/resume.svg";
import infoIcon from "../assets/images/miscellaneous/info.svg";
const Footer = () => {
  return (
    <MDiv className="footer-layout">
      <MDiv className="outer-button" whileHover={{ scale: 1.1 }}>
        <MImg src={infoIcon} className="info-icon" />
      </MDiv>
      <Link to="/">
        <MDiv className="outer-button" whileHover={{ scale: 1.1 }}>
          <MImg src={homeIcon} className="home-icon" />
        </MDiv>
      </Link>

      <MDiv className="outer-button" whileHover={{ scale: 1.1 }}>
        <MImg src={resumeIcon} className="resume-icon" />
      </MDiv>
    </MDiv>
  );
};
export default Footer;
