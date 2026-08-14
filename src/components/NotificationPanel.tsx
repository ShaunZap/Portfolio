import { Link } from "react-router-dom";
import "../styles/NotificationPanel.css"
import ThemeSwitcher from "./sub-components/ThemeSwitcher";

const NotificationPanel = () => {
  return (
    <div>
      <div className="panel-container">
        <Link to="/" className="titlelogo">
          <span className="logo-prefix">~/</span>
          Shaun Barreto
          <span className="logo-cursor">_</span>
        </Link>
        <div className="right-container">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};
export default NotificationPanel;