import Sections from "./Sections";
import Quotes from "./sub-components/Quotes";
import NewsApp from "./sub-components/newsApp";
import "../styles/MainContentStyle.css";

function MainContentBody() {
  return (
    <div className="main-content-layout">
      <div className="quotes-component">
        <Quotes />
      </div>
      <div className="news-component">
        <NewsApp />
      </div>
      <div className="sections-component">
        <Sections />
      </div>
    </div>
  );
}

export default MainContentBody;
