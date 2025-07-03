// Layout.tsx
import NotificationPanel from "./components/NotificationPanel";
import Footer from "./components/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import { routeList } from "./Routes";
import "./styles/LayoutStyle.css";
import { AnimatePresence, motion } from "framer-motion";

const pageTransition = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.2, ease: "easeInOut" },
};

const PageTransitionOverlay = () => {
  return (
    <motion.div
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      exit={{ scaleY: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{
        position: "fixed",
        top: 30,
        left: 0,
        right: 0,
        bottom: 40,
        transformOrigin: "top",
        backgroundColor: "var(--color-brand-1250)", // or use a brand color
        zIndex: 9999,
      }}
    />
  );
};

const Layout = () => {
  const location = useLocation();

  return (
    <div className="layout">
      <div className="notification-panel">
        <NotificationPanel />
      </div>

      <div className="main-content">
        <AnimatePresence mode="wait">
          <PageTransitionOverlay key={`overlay-${location.pathname}`} />

          <Routes location={location} key={location.pathname}>
            {routeList.map(({ path, element }, index) => (
              <Route
                key={index}
                path={path}
                element={
                  <motion.div {...pageTransition} style={{ height: "100%" }}>
                    {element}
                  </motion.div>
                }
              />
            ))}
          </Routes>
        </AnimatePresence>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
