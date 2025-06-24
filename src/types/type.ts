export type Skill = {
  title: string;
  icon: string;
  proficiency: {
    level: string;
    percentage: number;
  };
  description: string;
  highlights: string[];
  moreInfoLink: string;
};

export type SkillsData = {
  frontendData: Skill[];
  backEndData: Skill[];
  databaseData: Skill[];
  otherToolsData: Skill[];
};

export type ProjectData = {
  projectImage: string;
  projectTitle: string;
  projectDescription: string;
  techStackIcons: {
    icon: string;
    name: string;
  }[];
  projectLinks: {
    live: string;
    github: string;
  };
};

export type HobbyCategory = {
  title: string;
  items: string[];
};

export type AboutDatas = {
  profilePic: string;
  description: string;
  subtitle: string;
  description2: string;
  hobbies: {
    anime: HobbyCategory;
    gaming: HobbyCategory;
    manga: HobbyCategory;
  };
};

export type EducationEntry = {
  degree: string;
  institution: string;
  duration: string;
  gpa: string;
  highlights: string[];
};

export type CertificationEntry = {
  courseName: string;
  authorName: string;
  description: string;
  tags: string[];
};

export type InstitutionEntry = {
  institutionName: string;
  institutionIcon: string;
  email: string;
  address: string;
  websiteLink: string;
};

export type EducationData = {
  timelineData: EducationEntry[];
  certificationData: CertificationEntry[];
  institutionData: InstitutionEntry[];
};

export type ExperienceData = {
  companyName: string;
  jobDuration: string;
  jobTitle: string;
  jobDescription: string;
  jobLocation: string;
  techStack: string[];
};

export type Article = {
  title: string;
  description: string;
  image: string;
  publishedAt: string;
  url: string;
};

export type Quote = {
  id: number;
  quote: string;
  author: string;
};
