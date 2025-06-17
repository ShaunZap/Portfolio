import { div as MDiv, img as MImg } from "motion/react-client";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import homeIcon from "../assets/images/miscellaneous/home.svg";
import backIcon from "../assets/images/miscellaneous/left-arrow.svg";
import infoIcon from "../assets/images/miscellaneous/info.svg";
const Footer = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    if (window.history.length > 1 && window.location.pathname !== "/") {
      navigate(-1);
    }
  };
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

      <MDiv
        onClick={() => {
          handleBackButtonClick();
        }}
        className="outer-button"
        whileHover={{ scale: 1.1 }}
      >
        <MImg src={backIcon} className="back-icon" />
      </MDiv>
    </MDiv>
  );
};
export default Footer;
