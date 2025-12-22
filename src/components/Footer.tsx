import { useState } from "react";
import { div as MDiv } from "motion/react-client";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { Info, House, FileUser, Github, Linkedin } from "lucide-react";

import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const InfoModal = ({ onClose }: { onClose: () => void }) => (
  <div className="modal-card">
    <h2>Links</h2>
    <hr />
    <button className="close" onClick={onClose}>
      X
    </button>
    <div className="Links-container">
      <a
        href="https://www.linkedin.com/in/shaun-barreto/"
        className="linkedin"
        target="_blank"
      >
        <Linkedin size={20} aria-label="Linkedin" />
        <h3>LinkedIn</h3>
      </a>
      <a
        href="https://github.com/shaun-j-barreto"
        className="github"
        target="_blank"
      >
        <Github size={20} aria-label="Github" />
        <h3>GitHub</h3>
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
          <Info
            size={30}
            color="white"
            strokeWidth={1}
            data-testid="info-icon"
            data-tooltip-id="info-tip"
            data-tooltip-content="More Info"
          />
          {showModal && (
            <div className="modal-container">
              <InfoModal onClose={() => setShowModal(false)} />
            </div>
          )}
        </MDiv>

        <Link to="/">
          <MDiv className="outer-button" whileHover={{ scale: 1.1 }}>
            <House
              size={30}
              color="white"
              strokeWidth={1}
              data-testid="home-icon"
              data-tooltip-id="home-tip"
              data-tooltip-content="Go to Home"
            />
          </MDiv>
        </Link>

        <a href="/ShaunBarretoCV.pdf" target="_blank" rel="noopener noreferrer">
          <MDiv className="outer-button" whileHover={{ scale: 1.1 }}>
            <FileUser
              size={30}
              color="white"
              strokeWidth={1}
              data-testid="resume-icon"
              data-tooltip-id="resume-tip"
              data-tooltip-content="View Resume"
            />
          </MDiv>
        </a>
      </MDiv>
      <Tooltip id="info-tip" place="top" className="footer-tooltip" />
      <Tooltip id="home-tip" place="top" className="footer-tooltip" />
      <Tooltip id="resume-tip" place="top" className="footer-tooltip" />
    </>
  );
};

export default Footer;
