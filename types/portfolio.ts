export interface Education {
  period: string;
  institution: string;
  degree: string;
}

export interface WorkExperience {
  company: string;
  location: string;
  period: string;
  position: string;
  projectDetails: string;
  roles: string[];
  techStack: string[];
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "soft";
  proficiency: number;
}

export interface Award {
  title: string;
  count?: number;
}

export interface Language {
  name: string;
  proficiency: "Fluent" | "Proficient" | "Intermediate" | "Basic";
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  linkedin?: string;
  github?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  profile: string;
  contact: ContactInfo;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  education: Education[];
  technicalSkills: Skill[];
  softSkills: string[];
  awards: Award[];
  languages: Language[];
  workExperience: WorkExperience[];
}
