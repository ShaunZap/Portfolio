import dummyImage from "../assets/images/miscellaneous/dummy.png";
import goaUniIcon from "../assets/images/institutionIcons/goauni.svg";
import rosaryBcaIcon from "../assets/images/institutionIcons/rosarybca.svg";
import rosaryHscIcon from "../assets/images/institutionIcons/rosary.svg";
import perpetualIcon from "../assets/images/institutionIcons/perpetual.svg";
import projectIcon1 from "../assets/images/projectIcons/souper.png";
import projectIcon2 from "../assets/images/projectIcons/animeRealm.png";
import htmlICon from "../assets/images/techIcons/html.svg";
import cssIcon from "../assets/images/techIcons/css.svg";
import jsIcon from "../assets/images/techIcons/js.svg";
import typeIcon from "../assets/images/techIcons/typescript.svg";
import nextIcon from "../assets/images/techIcons/next.svg";
import nodeJsIcon from "../assets/images/techIcons/nodejs.svg";
import expressIcon from "../assets/images/techIcons/express-js.svg";
import mongodbIcon from "../assets/images/techIcons/mongoDb.svg";
import muiIcon from "../assets/images/techIcons/material-ui.svg";
import tailwindIcon from "../assets/images/techIcons/tailwindcss.svg";
import bootstrapIcon from "../assets/images/techIcons/bootstrap.svg";
import reactIcon from "../assets/images/techIcons/react.svg";
import gitIcon from "../assets/images/techIcons/git.svg";
import firebaseIcon from "../assets/images/techIcons/firebase.svg";
import mySqlIcon from "../assets/images/techIcons/mysql.svg";
import supabaseIcon from "../assets/images/techIcons/supabase.svg";
import vsIcon from "../assets/images/techIcons/visual-studio-code.svg";
import githubIcon from "../assets/images/techIcons/github.svg";
import figmaIcon from "../assets/images/techIcons/figma.svg";
import dockerIcon from "../assets/images/techIcons/docker.svg";
import postmanIcon from "../assets/images/techIcons/postman-api.svg";
import {
  SkillsData,
  AboutDatas,
  ProjectData,
  EducationData,
  ExperienceData,
} from "../types/type";

export const AboutData: AboutDatas = {
  profilePic: dummyImage,
  description: `et id sunt reprehenderit repellat quod, ipsum consectetur quos molestiae commodi vero! Vel eligendi error id inventore repudiandae, exercitationem consequuntur.`,
  subtitle: "Hobbies",
  description2: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero quas distinctio, veritatis inventore nemo aliquam cupiditate, natus provident id atque dolores! Maxime consectetur ipsum asperiores mollitia illum temporibus nisi facere!`,
  hobbies: {
    anime: {
      title: "Anime",
      items: [
        "Fullmetal Alchemist",
        "Kingdom",
        "One Piece",
        "Vinland Saga",
        "Monster",
        "Hunter x Hunter",
        "Death Note",
        "Naruto",
        "Bleach",
        "Berserk",
        "Code Geass",
        "Attack on Titan",
        "Dragon Ball",
        "Steins;Gate",
        "JoJo's Bizarre Adventure",
        "Hajime no Ippo",
        "Parasyte: The Maxim",
        "Pluto",
        "The Apothecary Diaries",
        "Jujutsu Kaisen",
        "Demon Slayer: Kimetsu no Yaiba",
        "My Hero Academia",
        "Great Teacher Onizuka",
        "One Punch Man",
        "Chainsaw Man",
        "Spy x Family",
        "Mob Psycho 100",
        "Erased",
        "Tokyo Ghoul",
        "Violet Evergarden",
        "Dororo",
        "To Your Eternity",
        "Your Lie in April",
        "Clannad & After Story",
        "Assassination Classroom",
        "ReLIFE",
        "Hell's Paradise",
        "Fire Force",
        "Akame ga Kill!",
        "Blue Eye Samurai",
        "Samurai Champloo",
      ],
    },
    gaming: {
      title: "Games",
      items: [
        "The Witcher 3",
        "Elden Ring",
        "Red Dead Redemption 2",
        "Battlefield 1",
        "Doom 2016",
        "Doom Eternal",
        "Far Cry 5",
        "Titanfall 2",
        "NFS Most Wanted",
        "Total Overdose",
        "GTA vice City",
        "Project IGI",
        "Far cry 3",
        "Far Cry 4",
        "Call of Duty: Modern Warfare 2",
        "Call of Duty: Modern Warfare 3",
        "Rust",
        "Counter-Strike: Global Offensive",
        "Counter-Strike 2",
        "Metro Exodus",
        "Metro 2033 Redux",
        "Once Human",
        "Prototype",
        "Once Human",
        "Warhammer 40,000: Space Marine",
        "The Forest",
      ],
    },
    manga: {
      title: "Manga/Manhwa",
      items: [
        "Berserk",
        "Kingdom",
        "Vagabond",
        "Leviathan",
        "Gosu",
        "Yongbi",
        "Red Storm",
        "Tower of God",
        "One Piece",
        "Dark Mortal",
        "Promised Orchid",
        "Noblesse",
        "Eleceed",
        "Blade of the Phantom Master",
        "Omniscient Reader's Viewpoint",
        "The Legend of the Northern Blade",
        "The Greatest Estate Developer",
        "Doom Breaker",
        "Peerless Dad",
        "Pick Me Up, Gacha",
        "The Superhuman Era",
        "The Lazy Lord Masters the Sword",
        "The Infinite Mage",
        "Revenge of the Baskerville Bloodhound",
        "Log in Murim",
        "The World After the Fall",
        "Damn Reincarnation",
        "Memorize",
        "Grand Blue",
        "A Returner’s Magic Should Be Special",
        "Solo Leveling",
        "Return of the Mount Hua Sect",
        "Return of the Mad Demon",
        "Teenage Mercenary",
        "The Swordmaster's Son",
        "Tyrant of the Tower Defense Game",
        "A Villain's Will to Survive",
        "The Reaper",
        "Academy's Undercover Professor",
        "Max Level Newbie",
        "Absolute Regression",
        "Jungle Juice",
        "My Daughter Is the Final Boss",
        "The Academy's Genius Swordsman",
        "The Knight King Who Returned With a God",
        "The Genius Medicinal Mage",
        "Legend of an Asura Poison Dragon",
        "Heavenly Grand Archives' Young Master",
        "Time-Limited Genius Dark Knight",
        "Disciple of the Holy Sword",
        "The Tutorial Is Too Tough",
        "The Overpowered Newbie",
        "The Great Wizard Transcendent",
        "Act Like a Boss Monster, Mr. Swallow",
        "Fist Demon of Mount Hua",
        "Second Life Ranker",
      ],
    },
  },
};

export const educationData: EducationData = {
  timelineData: [
    {
      degree: "Master of Computer Applications",
      institution: "Goa University",
      duration: "2022 - 2024",
      gpa: "8.39/10",
      highlights: [
        "Dean's List (2019-2022)",
        "President, Coding Club",
        "Capstone Project: Portfolio Website",
      ],
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Rosary College of Commerce and Arts",
      duration: "2018 - 2021",
      gpa: "8.18/10",
      highlights: [
        "Top 5% of the class",
        "Math & Computer Science Stream",
        "Science Fair State Finalist",
      ],
    },
    {
      degree: "Higher Secondary School Certificate",
      institution: "Rosary Higher Secondary School",
      duration: "2016 - 2018",
      gpa: "8/10",
      highlights: [
        "Science Stream with Mathematics",
        "Participated in State Level Science Exhibition",
        "Member of the Student Council",
      ],
    },
    {
      degree: "Secondary School Certificate",
      institution: "Perpetual Succour Convent High School",
      duration: "2005 - 2016",
      gpa: "7.75/10",
      highlights: [
        "Top 10% in the state board exams",
        "Active member of the Science Club",
        "Participated in various inter-school competitions",
      ],
    },
  ],
  certificationData: [
    {
      courseName:
        "React - The Complete Guide (incl Hooks, React Router, Redux)",
      authorName: "Maximilian Schwarzmüller",
      description:
        "Master ReactJS from the ground up, with hooks, React Router, Redux, and more! Build engaging user interfaces with confidence.",
      tags: ["react", "frontend", "web development"],
    },
    {
      courseName: "The Complete JavaScript Course 2024: From Zero to Expert!",
      authorName: "Jonas Schmedtmann",
      description:
        "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Includes ES6, OOP, AJAX, Webpack.",
      tags: ["javascript", "programming", "web development"],
    },
    {
      courseName:
        "Node.js, Express, MongoDB & More: The Complete Bootcamp 2024",
      authorName: "Jonas Schmedtmann",
      description:
        "Learn Node.js, Express, MongoDB, Mongoose, and more to build robust backend APIs and applications.",
      tags: ["nodejs", "express", "mongodb", "backend"],
    },
    {
      courseName: "Python for Data Science and Machine Learning Bootcamp",
      authorName: "Jose Portilla",
      description:
        "Learn how to use NumPy, Pandas, Seaborn, Matplotlib, Plotly, Scikit-learn, and more to become a Data Scientist or ML Engineer!",
      tags: ["python", "data science", "machine learning"],
    },
    {
      courseName: "The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert",
      authorName: "Colt Steele",
      description:
        "Become an expert at SQL! Understand the basics of MySQL, create and manage databases, and query data like a pro.",
      tags: ["mysql", "database", "sql"],
    },
  ],
  institutionData: [
    {
      institutionName: "Goa university",
      institutionIcon: goaUniIcon,
      email: "registrar@unigoa.ac.in",
      address: "Goa University, Taleigao Plateau, Goa 403206, India",
      websiteLink: "https://www.unigoa.ac.in/",
    },
    {
      institutionName: "Rosary College of Commerce and Arts",
      institutionIcon: rosaryBcaIcon,
      email: "principal@rosarycollege.ac.in",
      address: "Navelim, Goa 403707, India",
      websiteLink: "https://www.rosarycollege.org/",
    },
    {
      institutionName: "Rosary Higher Secondary School",
      institutionIcon: rosaryHscIcon,
      email: "rosaryhrsec_1988@yahoo.com",
      address: "Navelim, Goa 403707, India",
      websiteLink: "https://rosaryhssnavelim.in/",
    },
    {
      institutionName: "Perpetual Succour Convent High School",
      institutionIcon: perpetualIcon,
      email: "perpetualschool@gmail.com",
      address: "Navelim, Goa 403707, India",
      websiteLink: "https://perpetualschoolnavelim.edu.in/",
    },
  ],
};

export const experienceData: ExperienceData[] = [
  {
    companyName: "InnovateX Solutions",
    jobDuration: "March 2023 - Nov 2024",
    jobTitle: "Full Stack Developer",
    jobDescription:
      "Developed and maintained web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to define, design, and ship new features. Implemented RESTful APIs and optimized database queries for performance.",
    jobLocation: "Bengaluru, India, Remote",
    techStack: ["React", "Node.js", "Express", "MongoDB", "TypeScript", "AWS"],
  },
  {
    companyName: "TechWave Solutions",
    jobDuration: "June 2022 - Feb 2023",
    jobTitle: "Software Engineer Intern",
    jobDescription:
      "Assisted in the development of a web application for managing client projects. Wrote clean, maintainable code and participated in code reviews. Gained experience in Agile methodologies and version control systems.",
    jobLocation: "Goa, India",
    techStack: ["JavaScript", "React", "Node.js", "Git", "MySQL"],
  },
  {
    companyName: "CodeCrafters Inc.",
    jobDuration: "Jan 2021 - May 2022",
    jobTitle: "Junior Developer",
    jobDescription:
      "Contributed to the development of internal tools and applications. Collaborated with senior developers to enhance application performance and user experience. Participated in daily stand-ups and sprint planning sessions.",
    jobLocation: "Remote",
    techStack: ["Python", "Django", "PostgreSQL", "Docker"],
  },
];

export const projectData: ProjectData[] = [
  {
    projectImage: projectIcon1,
    projectTitle: "Souper",
    projectDescription:
      "Souper is a restaurant website created as a project to learn and practice CSS Grid layout. It's a frontend-only site, and all the images used were generated using various AI tools such as Leonardo AI, DALL·E, and Clipdrop.co.",
    techStackIcons: [
      {
        icon: htmlICon,
        name: "HTML5",
      },
      {
        icon: cssIcon,
        name: "CSS3",
      },
      {
        icon: jsIcon,
        name: "JavaScript",
      },
    ],
    projectLinks: {
      live: "https://shaun-j-barreto.github.io/Sooper-Restaurant/index.html",
      github: "https://github.com/shaun-j-barreto/Sooper-Restaurant",
    },
  },
  {
    projectImage: projectIcon2,
    projectTitle: "AnimeRealm",
    projectDescription:
      "Anime Realm is a web application that allows users to explore and discover anime and manga series. It features a user-friendly interface, search functionality, and detailed information about each anime/manga.it uses jikan API to fetch anime/manga data.",
    techStackIcons: [
      {
        icon: htmlICon,
        name: "HTML5",
      },
      {
        icon: cssIcon,
        name: "CSS3",
      },
      {
        icon: jsIcon,
        name: "JavaScript",
      },
      {
        icon: mongodbIcon,
        name: "MongoDB",
      },
      {
        icon: expressIcon,
        name: "Express.js",
      },
      {
        icon: nodeJsIcon,
        name: "Node.js",
      },
      {
        icon: bootstrapIcon,
        name: "Bootstrap",
      },
    ],
    projectLinks: {
      live: "https://animerealm.onrender.com",
      github: "https://github.com/ShaunZap/AnimeRealm",
    },
  },
];

export const skillsData: SkillsData = {
  frontendData: [
    {
      title: "React",
      icon: reactIcon,
      proficiency: {
        level: "Intermediate",
        percentage: 75,
      },
      description:
        "React is a popular JavaScript library used to build user interfaces. Developed by Meta, it emphasizes component-based architecture and efficient UI updates.",
      highlights: ["Context Api", "State Management", "React Hooks"],
      moreInfoLink: "https://reactjs.org/",
    },
    {
      title: "HTML",
      icon: htmlICon,
      proficiency: {
        level: "Advanced",
        percentage: 90,
      },
      description:
        "HTML is the standard markup language used to structure content on the web. It forms the backbone of all websites and web applications.",
      highlights: ["Semantic Tags", "Forms", "Accessibility"],
      moreInfoLink: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      title: "CSS",
      icon: cssIcon,
      proficiency: {
        level: "Advanced",
        percentage: 85,
      },
      description:
        "CSS controls the visual appearance of web pages, enabling layout, colors, fonts, and responsive design across devices and screen sizes.",
      highlights: ["Flexbox", "Grid", "Responsive Design"],
      moreInfoLink: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      title: "Bootstrap",
      icon: bootstrapIcon,
      proficiency: {
        level: "Intermediate",
        percentage: 75,
      },
      description:
        "Bootstrap is a CSS framework for building responsive websites quickly using a grid system and pre-designed components.",
      highlights: ["Grid System", "Utility Classes", "Responsive Layout"],
      moreInfoLink: "https://getbootstrap.com/",
    },
    {
      title: "Material UI",
      icon: muiIcon,
      proficiency: {
        level: "Intermediate",
        percentage: 70,
      },
      description:
        "Material UI is a React component library that follows Google's Material Design, providing reusable and customizable UI components.",
      highlights: ["Components", "Theming", "Accessibility"],
      moreInfoLink: "https://mui.com/",
    },
    {
      title: "Tailwind CSS",
      icon: tailwindIcon,
      proficiency: {
        level: "Advanced",
        percentage: 85,
      },
      description:
        "Tailwind CSS is a utility-first framework that lets you build modern, responsive layouts quickly using atomic classes directly in your markup.",
      highlights: ["Utility Classes", "Customization", "Responsive Design"],
      moreInfoLink: "https://tailwindcss.com/",
    },
    {
      title: "JavaScript",
      icon: jsIcon,
      proficiency: {
        level: "Advanced",
        percentage: 90,
      },
      description:
        "JavaScript is a versatile programming language used to create interactive web pages. It runs in browsers and powers client-side logic.",
      highlights: ["ES6+", "DOM Manipulation", "Asynchronous Programming"],
      moreInfoLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      title: "TypeScript",
      icon: typeIcon,
      proficiency: {
        level: "Intermediate",
        percentage: 75,
      },
      description:
        "TypeScript is a superset of JavaScript that adds static typing. It helps catch bugs early and improves code readability and maintainability.",
      highlights: ["Type Safety", "Interfaces", "Generics"],
      moreInfoLink: "https://www.typescriptlang.org/",
    },
    {
      title: "Next.js",
      icon: nextIcon,
      proficiency: {
        level: "Intermediate",
        percentage: 70,
      },
      description:
        "Next.js is a React framework that supports server-side rendering, static site generation, and full-stack development with built-in API routes.",
      highlights: ["File-based Routing", "SSR/SSG", "API Routes"],
      moreInfoLink: "https://nextjs.org/",
    },
  ],

  backEndData: [
    {
      title: "Node.js",
      icon: nodeJsIcon,
      proficiency: {
        level: "Intermediate",
        percentage: 70,
      },
      description:
        "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser. It allows developers to use JavaScript to write server-side code.",
      highlights: ["Express.js", "RESTful APIs", "Middleware"],
      moreInfoLink: "https://nodejs.org/",
    },
    {
      title: "Express.js",
      icon: expressIcon,
      proficiency: {
        level: "Intermediate",
        percentage: 70,
      },
      description:
        "Express.js is a minimal and flexible Node.js web framework that provides a robust set of features for building RESTful APIs and web applications.",
      highlights: ["Routing", "Middleware", "API Design"],
      moreInfoLink: "https://expressjs.com/",
    },
  ],
  databaseData: [
    {
      title: "MongoDB",
      icon: mongodbIcon,
      proficiency: {
        level: "Intermediate",
        percentage: 65,
      },
      description:
        "MongoDB is a NoSQL database that uses a document-oriented data model. It stores data in flexible, JSON-like documents, making it easy to work with unstructured data.",
      highlights: ["Data Modeling", "Aggregation Framework", "Indexing"],
      moreInfoLink: "https://www.mongodb.com/",
    },
    {
      title: "Firebase",
      icon: firebaseIcon,
      proficiency: {
        level: "Intermediate",
        percentage: 65,
      },
      description:
        "Firebase is a backend-as-a-service platform by Google offering tools like authentication, databases, hosting, and analytics for building web and mobile apps.",
      highlights: ["Authentication", "Firestore", "Hosting"],
      moreInfoLink: "https://firebase.google.com/",
    },
    {
      title: "MySQL",
      icon: mySqlIcon,
      proficiency: {
        level: "Intermediate",
        percentage: 70,
      },
      description:
        "MySQL is a widely used open-source relational database system. It stores structured data and supports SQL for querying and managing databases efficiently.",
      highlights: ["SQL Queries", "Joins", "Stored Procedures"],
      moreInfoLink: "https://www.mysql.com/",
    },
    {
      title: "Supabase",
      icon: supabaseIcon,
      proficiency: {
        level: "Intermediate",
        percentage: 65,
      },
      description:
        "Supabase is an open-source Firebase alternative that provides authentication, PostgreSQL database, real-time updates, and edge functions for building full-stack apps.",
      highlights: ["PostgreSQL", "Auth", "Realtime DB"],
      moreInfoLink: "https://supabase.com/",
    },
  ],
  otherToolsData: [
    {
      title: "Git",
      icon: gitIcon,
      proficiency: {
        level: "Intermediate",
        percentage: 80,
      },
      description:
        "Git is a distributed version control system that allows developers to track changes in their codebase, collaborate with others, and manage different versions of their projects.",
      highlights: ["Version Control", "Branching", "Merging"],
      moreInfoLink: "https://git-scm.com/",
    },
    {
      title: "GitHub",
      icon: githubIcon,
      proficiency: {
        level: "Intermediate",
        percentage: 80,
      },
      description:
        "GitHub is a web-based platform for version control using Git. It allows for code hosting, collaboration, issue tracking, and CI/CD workflows.",
      highlights: ["Repositories", "Pull Requests", "Actions"],
      moreInfoLink: "https://github.com/",
    },
    {
      title: "Postman",
      icon: postmanIcon,
      proficiency: {
        level: "Intermediate",
        percentage: 75,
      },
      description:
        "Postman is an API client that simplifies building, testing, and debugging RESTful APIs through a powerful and user-friendly interface.",
      highlights: ["API Testing", "Collections", "Environment Variables"],
      moreInfoLink: "https://www.postman.com/",
    },
    {
      title: "VS Code",
      icon: vsIcon,
      proficiency: {
        level: "Advanced",
        percentage: 90,
      },
      description:
        "Visual Studio Code is a lightweight and powerful code editor with features like IntelliSense, debugging, and Git integration.",
      highlights: ["Extensions", "Integrated Terminal", "Snippets"],
      moreInfoLink: "https://code.visualstudio.com/",
    },
    {
      title: "Docker",
      icon: dockerIcon,
      proficiency: {
        level: "Beginner",
        percentage: 60,
      },
      description:
        "Docker is a platform that enables developers to build, deploy, and run applications using containers for consistency across environments.",
      highlights: ["Containers", "Images", "Dockerfile"],
      moreInfoLink: "https://www.docker.com/",
    },
    {
      title: "Figma",
      icon: figmaIcon,
      proficiency: {
        level: "Intermediate",
        percentage: 70,
      },
      description:
        "Figma is a cloud-based design tool used for UI/UX design and collaboration. It enables real-time teamwork and prototyping.",
      highlights: ["UI Design", "Prototyping", "Team Collaboration"],
      moreInfoLink: "https://figma.com/",
    },
  ],
};
