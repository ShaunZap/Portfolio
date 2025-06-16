import AboutComp from "./components/AboutComp";
import EducationComp from "./components/EducationComp";
import ExperienceComp from "./components/ExperienceComp";
import MainContentBody from "./components/MainContentBody";
import ProjectsComp from "./components/ProjectsComp";
import SkillsComp from "./components/SkillsComp";

export const routeList = [
  {
    path: "/",
    element: <MainContentBody />,
  },

  {
    path: "/about",
    element: <AboutComp />,
  },
  {
    path: "/education",
    element: <EducationComp />,
  },
  {
    path: "/experience",
    element: <ExperienceComp />,
  },
  {
    path: "/projects",
    element: <ProjectsComp />,
  },
  {
    path: "/skills",
    element: <SkillsComp />,
  },
];
