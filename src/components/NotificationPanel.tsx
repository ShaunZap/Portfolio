
import "../styles/NotificationPanel.css"
import ThemeSwitcher from "./sub-components/ThemeSwitcher";
const NotificationPanel = () => {
  return (
    <div>
      <div className="panel-container">
        <div className="titlelogo">Shaun Barreto</div>
        <div className="right-container">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};
export default NotificationPanel;
