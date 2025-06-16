import NotificationPanel from "./components/NotificationPanel";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { routeList } from "./Routes";
import "./styles/LayoutStyle.css";
const Layout = () => {
  return (
    <div className="layout">
      <div className="notification-panel">
        <NotificationPanel />
      </div>
      <div className="main-content">
        <Routes>
          {routeList.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
