import Sections from "./Sections";
import Quotes from "./sub-components/Quotes";
import NowSection from "./sub-components/NowSection";
import "../styles/MainContentStyle.css";
import FlappyBird from "./sub-components/FlappyBird";

function MainContentBody() {
  return (
    <div className="main-content-layout">
      <div className="quotes-component">
        <Quotes />
      </div>
      <div className="game-component">
        <FlappyBird />
      </div>
      <div className="sections-component">
        <Sections />
      </div>
      <div className="now-section-component">
        <NowSection />
      </div>
    </div>
  );
}

export default MainContentBody;
