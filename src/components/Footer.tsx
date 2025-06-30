import { useState } from "react";
import { div as MDiv, img as MImg } from "motion/react-client";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import homeIcon from "../assets/images/miscellaneous/home.svg";
import resumeIcon from "../assets/images/miscellaneous/resume.svg";
import infoIcon from "../assets/images/miscellaneous/info.svg";
import linkedinIcon from "../assets/images/miscellaneous/linkedin.svg";
import githubIcon from "../assets/images/techIcons/github.svg";

// Simple modal component
const InfoModal = ({ onClose }: { onClose: () => void }) => (
  <div className="modal-card">
    <h2>Links</h2>
    <hr />
    <button className="close" onClick={onClose}>
      X
    </button>
    <div className="linkedin">
      <img src={linkedinIcon} alt="linkedin" />
      <a href="https://www.linkedin.com/in/shaun-barreto/" target="_blank">
        Linkedin
      </a>
    </div>
    <div className="github">
      <img src={githubIcon} alt="github" />
      <a href="https://github.com/shaun-j-barreto" target="_blank">
        Github
      </a>
    </div>
  </div>
);

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <MDiv className="footer-layout">
        <MDiv
          className="outer-button"
          whileHover={{ scale: 1.1 }}
          onClick={() => setShowModal(!showModal)}
        >
          <MImg src={infoIcon} className="info-icon" data-testid="info-icon" />
        </MDiv>

        <Link to="/">
          <MDiv className="outer-button" whileHover={{ scale: 1.1 }}>
            <MImg
              src={homeIcon}
              className="home-icon"
              data-testid="home-icon"
            />
          </MDiv>
        </Link>

        <MDiv className="outer-button" whileHover={{ scale: 1.1 }}>
          <MImg
            src={resumeIcon}
            className="resume-icon"
            data-testid="resume-icon"
          />
        </MDiv>
      </MDiv>
      {showModal && (
        <div className="modal-container">
          <InfoModal onClose={() => setShowModal(false)} />
        </div>
      )}
    </>
  );
};

export default Footer;
