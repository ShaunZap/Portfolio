import Sections from "./Sections";
import ClockComp from "./sub-components/ClockComp";
import WeatherComp from "./sub-components/WeatherComp";
import "../styles/MainContentStyle.css";

function MainContentBody() {
  return (
    <div className="main-content-layout">
      <div className="weather-component">
        <WeatherComp />
      </div>
      <div className="clock-component">
        <ClockComp />
      </div>
      <div className="sections-component">
        <Sections />
      </div>
    </div>
  );
}

export default MainContentBody;
