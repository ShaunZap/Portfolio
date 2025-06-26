import DigitalClock from "./sub-components/DigitalClock";
import batteryIcon from "../assets/images/miscellaneous/battery.svg";
import "../styles/NotificationPanel.css"
const NotificationPanel = () => {
  return (
    <div>
      <div className="panel-container">
        <div className="titlelogo">Shaun Barreto</div>
        <div className="right-container">
          <img className="batteryicon" src={batteryIcon} alt="battery-Icon" />
          <DigitalClock />
        </div>
      </div>
    </div>
  );
};
export default NotificationPanel;
