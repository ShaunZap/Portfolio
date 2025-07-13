import { imageIcons } from "./ImageIcons";

import {
  SkillsData,
  AboutDatas,
  ProjectData,
  EducationData,
  ExperienceData,
} from "../types/type";

export const sectionLinks = [
  { name: "About", link: "/about", icon: imageIcons.userICon },
  { name: "Projects", link: "/projects", icon: imageIcons.codeICon },
  { name: "Experience", link: "/experience", icon: imageIcons.briefcaseIcon },
  { name: "Education", link: "/education", icon: imageIcons.institutionICon },
  { name: "Skills", link: "/skills", icon: imageIcons.toolICon },
];

export const AboutData: AboutDatas = {
  profilePic: imageIcons.profilePic,
  description: `Hey there, I'm Shaun Barreto – a front-end developer from Goa, India, who occasionally dips a toe into the mysterious world of the backend (and promptly regrets it).

I spend my days wrangling pixels, writing code that works (most of the time), and pretending to understand the complexities of the universe – when in reality, I'm just trying to center a div.

I love building smooth UIs, breaking things so I can fix them again, and occasionally asking Stack Overflow for the 458th time why my state isn't updating.

Currently open to cool opportunities, caffeine-fueled coding sprints, and meme-worthy bugs. Let’s build something that doesn’t crash on first render`,
  subtitle: "Side Quests",
  description2: `When I’m not battling bugs or explaining to people that "React" is not just an emotional state, I’m probably drowning in music, anime, manga, or video games — and loving every chaotic second of it. Occasionally, I do step outside to play football, table tennis, badminton, or just to remind myself what sunlight feels like (yes, I do touch grass sometimes, thank you very much).

In my free time (aka when I'm not questioning life over a console error), I binge-watch anime, dive into manga lore, and button-mash my way through game bosses like it’s therapy. So here are some of my favorite series and titles — in case you’re looking to lose sleep and productivity too. `,
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
        "Top 10% of the class (not sure how accurate this is)",
        "Co-ordinator, Astral Coder @ Infofest – Managed and organized a competitive coding event as part of a major tech fest. ",
      ],
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Rosary College of Commerce and Arts",
      duration: "2018 - 2021",
      gpa: "8.18/10",
      highlights: [
        "Top 5% of the class",
        "created projects",
        "got first intership at Mrinqo Technologies",
      ],
    },
    {
      degree: "Higher Secondary School Certificate",
      institution: "Rosary Higher Secondary School",
      duration: "2016 - 2018",
      gpa: "8/10",
      highlights: [
        "Participated in 'SOME' inter-school competitions",
        "did Commerce",
        "Played Guitar sometimes",
      ],
    },
    {
      degree: "Secondary School Certificate",
      institution: "Perpetual Succour Convent High School",
      duration: "2005 - 2016",
      gpa: "7.75/10",
      highlights: [
        "Participated in 'SOME' inter-school competitions",
        "part of the class football team",
        "lazed around in class",
      ],
    },
  ],
  certificationData: [
    {
      courseName:
        "Node.js, Express, MongoDB & More: The Complete Bootcamp 2024",
      authorName: "Jonas Schmedtmann",
      description:
        "Learn Node.js, Express, MongoDB, Mongoose, and more to build robust backend APIs and applications.",
      tags: ["nodejs", "express", "mongodb", "backend"],
    },
    {
      courseName: "The Ultimate React Course 2025: React, Redux & More!",
      authorName: "Jonas Schmedtmann",
      description:
        "Master React, Redux, Next js and modern JavaScript to build powerful web applications with this comprehensive course.",
      tags: ["react", "redux", "nextjs", "javascript", "web development"],
    },
    {
      courseName: "Learning Git & GitHub",
      authorName: "Ray Villalobos",
      description:
        "Learn the fundamentals of Git and GitHub, including version control, branching, merging, and collaboration on software projects.",
      tags: ["git", "github", "version control", "collaboration"],
    },
    {
      courseName: "Javascript Essential Training",
      authorName: "Morten Rand-Hendriksen",
      description:
        "Master the fundamentals of JavaScript, including variables, functions, loops, and objects, to build interactive web applications.",
      tags: ["javascript", "web development", "programming"],
    },
    {
      courseName: "CSS for Programmers",
      authorName: "Morten Rand-Hendriksen",
      description:
        "Learn CSS fundamentals, including selectors, properties, and layout techniques, to style web pages effectively.",
      tags: ["css", "web design", "styling"],
    },
  ],
  institutionData: [
    {
      institutionName: "Goa university",
      institutionIcon: imageIcons.goaUniIcon,
      email: "registrar@unigoa.ac.in",
      address: "Goa University, Taleigao Plateau, Goa 403206, India",
      websiteLink: "https://www.unigoa.ac.in/",
    },
    {
      institutionName: "Rosary College of Commerce and Arts",
      institutionIcon: imageIcons.rosaryBcaIcon,
      email: "principal@rosarycollege.ac.in",
      address: "Navelim, Goa 403707, India",
      websiteLink: "https://www.rosarycollege.org/",
    },
    {
      institutionName: "Rosary Higher Secondary School",
      institutionIcon: imageIcons.rosaryHscIcon,
      email: "rosaryhrsec_1988@yahoo.com",
      address: "Navelim, Goa 403707, India",
      websiteLink: "https://rosaryhssnavelim.in/",
    },
    {
      institutionName: "Perpetual Succour Convent High School",
      institutionIcon: imageIcons.perpetualIcon,
      email: "perpetualschool@gmail.com",
      address: "Navelim, Goa 403707, India",
      websiteLink: "https://perpetualschoolnavelim.edu.in/",
    },
  ],
};

export const experienceData: ExperienceData[] = [
  {
    companyName: "Zapcom Group Inc",
    jobDuration: "Jan 2024 - Present",
    jobTitle: "Frontend Developer",
    jobDescription:
      "Built a responsive UI from scratch using React, TypeScript, and Material UI. Integrated RESTful APIs and applied template-driven patterns for scalable, maintainable code.",
    jobLocation: "Bengaluru, India, Remote",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "Material UI",
      "Git",
      "Postman",
      "Figma",
      "Next.js",
    ],
  },
  {
    companyName: "Mrinqo Technologies",
    jobDuration: "Nov 2019 - Dec 2019",
    jobTitle: "Intern",
    jobDescription:
      "Assisted in Testing and debugging web applications, Iot devices, and mobile applications. Gained hands-on experience in testing methodologies and tools. ",
    jobLocation: "Goa, India",
    techStack: ["selenium"],
  },
];

export const projectData: ProjectData[] = [
  {
    projectImage: imageIcons.projectIcon1,
    projectTitle: "Souper",
    projectDescription:
      "Souper is a restaurant website created as a project to learn and practice CSS Grid layout. It's a frontend-only site, and all the images used were generated using various AI tools such as Leonardo AI, DALL·E, and Clipdrop.co.",
    techStackIcons: [
      {
        icon: imageIcons.htmlICon,
        name: "HTML5",
      },
      {
        icon: imageIcons.cssIcon,
        name: "CSS3",
      },
      {
        icon: imageIcons.jsIcon,
        name: "JavaScript",
      },
    ],
    projectLinks: {
      live: "https://shaun-j-barreto.github.io/Sooper-Restaurant/index.html",
      github: "https://github.com/shaun-j-barreto/Sooper-Restaurant",
    },
  },
  {
    projectImage: imageIcons.projectIcon2,
    projectTitle: "AnimeRealm",
    projectDescription:
      "Anime Realm is a web application that allows users to explore and discover anime and manga series. It features a user-friendly interface, search functionality, and detailed information about each anime/manga.it uses jikan API to fetch anime/manga data.",
    techStackIcons: [
      {
        icon: imageIcons.htmlICon,
        name: "HTML5",
      },
      {
        icon: imageIcons.cssIcon,
        name: "CSS3",
      },
      {
        icon: imageIcons.jsIcon,
        name: "JavaScript",
      },
      {
        icon: imageIcons.mongodbIcon,
        name: "MongoDB",
      },
      {
        icon: imageIcons.expressIcon,
        name: "Express.js",
      },
      {
        icon: imageIcons.nodeJsIcon,
        name: "Node.js",
      },
      {
        icon: imageIcons.bootstrapIcon,
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
      icon: imageIcons.reactIcon,
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
      title: "Bootstrap",
      icon: imageIcons.bootstrapIcon,
      proficiency: {
        level: "Intermediate",
        percentage: 80,
      },
      description:
        "Bootstrap is a CSS framework for building responsive websites quickly using a grid system and pre-designed components.",
      highlights: ["Grid System", "Utility Classes", "Responsive Layout"],
      moreInfoLink: "https://getbootstrap.com/",
    },
    {
      title: "Material UI",
      icon: imageIcons.muiIcon,
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
      icon: imageIcons.tailwindIcon,
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
      icon: imageIcons.jsIcon,
      proficiency: {
        level: "Intermediate`",
        percentage: 70,
      },
      description:
        "JavaScript is a versatile programming language used to create interactive web pages. It runs in browsers and powers client-side logic.",
      highlights: ["ES6+", "DOM Manipulation", "Asynchronous Programming"],
      moreInfoLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      title: "TypeScript",
      icon: imageIcons.typeIcon,
      proficiency: {
        level: "Intermediate",
        percentage: 65,
      },
      description:
        "TypeScript is a superset of JavaScript that adds static typing. It helps catch bugs early and improves code readability and maintainability.",
      highlights: ["Type Safety", "Interfaces", "Generics"],
      moreInfoLink: "https://www.typescriptlang.org/",
    },
    {
      title: "Next.js",
      icon: imageIcons.nextIcon,
      proficiency: {
        level: "Intermediate",
        percentage: 60,
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
      icon: imageIcons.nodeJsIcon,
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
      icon: imageIcons.expressIcon,
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
      icon: imageIcons.mongodbIcon,
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
      icon: imageIcons.firebaseIcon,
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
      title: "Supabase",
      icon: imageIcons.supabaseIcon,
      proficiency: {
        level: "Beginner",
        percentage: 55,
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
      icon: imageIcons.gitIcon,
      proficiency: {
        level: "Intermediate",
        percentage: 65,
      },
      description:
        "Git is a distributed version control system that allows developers to track changes in their codebase, collaborate with others, and manage different versions of their projects.",
      highlights: ["Version Control", "Branching", "Merging"],
      moreInfoLink: "https://git-scm.com/",
    },
    {
      title: "GitHub",
      icon: imageIcons.githubIcon,
      proficiency: {
        level: "Intermediate",
        percentage: 70,
      },
      description:
        "GitHub is a web-based platform for version control using Git. It allows for code hosting, collaboration, issue tracking, and CI/CD workflows.",
      highlights: ["Repositories", "Pull Requests", "Actions"],
      moreInfoLink: "https://github.com/",
    },
    {
      title: "Postman",
      icon: imageIcons.postmanIcon,
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
      title: "Docker",
      icon: imageIcons.dockerIcon,
      proficiency: {
        level: "Beginner",
        percentage: 50,
      },
      description:
        "Docker is a platform that enables developers to build, deploy, and run applications using containers for consistency across environments.",
      highlights: ["Containers", "Images", "Dockerfile"],
      moreInfoLink: "https://www.docker.com/",
    },
    {
      title: "Figma",
      icon: imageIcons.figmaIcon,
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
