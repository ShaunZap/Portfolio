import ReusableTitle from "./sub-components/ReusableTitle";
import "../styles/AboutComp.css";
import { AboutData } from "../Data/Data";

const AboutComp = () => {
  return (
    <div>
      <ReusableTitle title={"About"} />
      <div className="about-section-1">
        <div className="image-container">
          <img src={AboutData.profilePic} alt="shaun-image" />
        </div>
        <div className="about-description" data-testid="about-desc">
          {AboutData.description}
        </div>
      </div>
      <div className="about-section-2">
        <div className="hobbies-title">{AboutData.subtitle}</div>
        <div className="hobbies-description" data-testid="hobbie-desc">
          {AboutData.description2}
        </div>
        <div className="hobbies-list">
          {Object.entries(AboutData.hobbies).map(([key, category]) => (
            <div className="hobbie-card" key={key}>
              <div className="hobbie-title">{category.title}</div>
              <ul>
                {category.items.map((item, index) => (
                  <li
                    key={index}
                    data-testid={`hobby-${item}-${index}-${category.title}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AboutComp;
