import {
  PortfolioData,
  Education,
  WorkExperience,
  Skill,
  Award,
  Language,
  ContactInfo,
  PersonalInfo,
} from '@/types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Prabakaran Arumugam',
  title: 'Full Stack + AI',
  profile:
    'Solution-oriented Full Stack Developer with 12+ years of experience and hands-on expertise in building Agentic AI solutions, RAG pipelines, and intelligent automation systems using modern LLM frameworks.',
  contact: {
    phone: '+91 9500107044',
    email: 'prabakar1389@gmail.com',
    location: 'Chennai, Tamilnadu, India',
    linkedin: 'https://www.linkedin.com/in/prabakaran-arumugam-4b8b90172/',
    github: 'https://github.com/prabakar1308',
  },
};

export const education: Education[] = [
  {
    period: '2008 - 2012',
    institution: 'PANIMALAR ENGG COLLEGE',
    degree: 'Bachelor of Engg (E.I.E)',
  },
];

export const technicalSkills: Skill[] = [
  { name: 'Angular', category: 'frontend', proficiency: 90 },
  { name: 'React', category: 'frontend', proficiency: 90 },
  { name: 'Angular Material', category: 'frontend', proficiency: 90 },
  { name: 'Material UI', category: 'frontend', proficiency: 90 },
  { name: 'Hooks & Redux', category: 'frontend', proficiency: 90 },
  { name: 'NGRX', category: 'frontend', proficiency: 90 },
  { name: 'JavaScript', category: 'frontend', proficiency: 90 },
  { name: 'TypeScript', category: 'frontend', proficiency: 80 },
  { name: 'HTML5', category: 'frontend', proficiency: 90 },
  { name: 'SASS/SCSS', category: 'frontend', proficiency: 80 },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 70 },
  { name: 'Jest', category: 'tools', proficiency: 60 },
  { name: 'ESLint & Prettier', category: 'tools', proficiency: 80 },
  { name: 'Nest JS', category: 'backend', proficiency: 70 },
  { name: 'PostgreSQL', category: 'backend', proficiency: 60 },
  { name: 'Java', category: 'backend', proficiency: 70 },
  { name: 'Spring Boot', category: 'backend', proficiency: 70 },
  { name: 'Web Logic', category: 'backend', proficiency: 60 },
  { name: 'Oracle', category: 'backend', proficiency: 50 },
  { name: 'Next JS', category: 'frontend', proficiency: 30 },
  { name: 'Agile Methodology', category: 'tools', proficiency: 85 },
  { name: 'GitHub', category: 'tools', proficiency: 80 },
  { name: 'JIRA', category: 'tools', proficiency: 80 },
  { name: 'GitHub Co-pilot', category: 'tools', proficiency: 80 },
  { name: 'Hostinger VPS', category: 'tools', proficiency: 75 },
  { name: 'Google Cloud', category: 'tools', proficiency: 30 },
  { name: 'VS Code', category: 'tools', proficiency: 90 },
  { name: 'Google Antigravity', category: 'tools', proficiency: 50 },
];

export const softSkills: string[] = [
  'Web Development',
  'Effective Communication',
  'Time Management',
  'Leadership & Teamwork',
  'Critical Thinking',
  'Problem Solving',
  'Mentoring & Coaching',
  'Client Interaction',
];

export const awards: Award[] = [
  { title: 'Outstanding Performer', count: 3 },
  { title: 'Spot-On Award', count: 7 },
];

export const languages: Language[] = [
  { name: 'English', proficiency: 'Fluent' },
  { name: 'Tamil', proficiency: 'Fluent' },
];

export const workExperience: WorkExperience[] = [
  {
    company: 'HCL Tech',
    location: 'Chennai, Tamilnadu',
    period: '2021 - PRESENT',
    position: 'Lead Consultant in E.ON Energy project',
    projectDetails:
      'International energy company focused on smart grids and customer solutions to drive the energy transition in Europe.',
    roles: [
      'Lead, mentor, and manage a high-performing team',
      'Foster a collaborative and results-driven work environment',
      'Technical architecture and implementation',
      'Client stakeholder management and requirement analysis',
      'Exploring and implementing AI agents to enhance application capabilities',
    ],
    techStack: [
      'Angular',
      'React',
      'Node.js',
      'Nest JS',
      'PostgreSQL',
      'AI Agents (LLM powered along with Langchain, Langgraph, MCP & RAG)',
    ],
  },
  {
    company: 'Mindtree',
    location: 'Chennai, Tamilnadu',
    period: '2013 - 2021',
    position: 'Technical Lead in AAMC project',
    projectDetails:
      'The MyERAS application is the form you will use to enter information about yourself and submit it along with your supporting documents when you apply to MD programs.',
    roles: [
      'Frontend development and Code Review',
      'Mentor & Managing the frontend team',
      'Client Interaction and requirement analysis',
      'Technical guidance and architecture decisions',
    ],
    techStack: [
      'Angular',
      'Angular Material',
      'NgRx',
      'TypeScript',
      'JAVA',
      'Spring Boot',
      'Web Logic',
      'JUnit',
    ],
  },
  {
    company: 'Mindtree',
    location: 'Chennai, Tamilnadu',
    period: '2013 - 2021',
    position: 'Senior Software Engineer in TMP Worldwide project',
    projectDetails:
      'Talent Brew CRM is a Candidate relationship management tool that integrated with a Talent Brew career site that mainly focused to deliver and leverage the functions while performing sourcing and recruiting teams.',
    roles: [
      'Frontend development and Code Review',
      'Mentoring the junior developers',
      'Client interaction and technical guidance',
      'Feature implementation and performance optimization',
    ],
    techStack: [
      'React',
      'Redux',
      'Redux-Saga',
      'Material UI',
      'Angular',
      'Angular Material',
      'NgRx',
    ],
  },
  {
    company: 'Mindtree',
    location: 'Chennai, Tamilnadu',
    period: '2013 - 2021',
    position: 'Software Engineer in Time Inc. project',
    projectDetails:
      'PCAT - Preference Center Admin Tool is a new application developed in Angular 4 which helps to maintain the user preferences questions available in Time Inc. brand sites.',
    roles: [
      'Requirement Analysis',
      'Frontend development and implementation',
      'UI/UX implementation',
      'Testing and deployment',
    ],
    techStack: ['Angular', 'Bootstrap', 'JavaScript'],
  },
];

export const portfolioData: PortfolioData = {
  personalInfo,
  education,
  technicalSkills,
  softSkills,
  awards,
  languages,
  workExperience,
};

// Utility functions with TypeScript return types
export const getTotalExperience = (): number => {
  const startYear = 2013;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear - 1;
};

export const getSkillsByCategory = (category: Skill['category']): Skill[] => {
  return technicalSkills.filter((skill) => skill.category === category);
};

export const getProficiencyColor = (proficiency: number): string => {
  if (proficiency >= 90) return 'bg-green-500';
  if (proficiency >= 80) return 'bg-blue-500';
  if (proficiency >= 70) return 'bg-yellow-500';
  return 'bg-red-500';
};

export const getLanguageProficiencyColor = (proficiency: Language['proficiency']): string => {
  const colors = {
    Fluent: 'bg-green-100 text-green-800',
    Proficient: 'bg-blue-100 text-blue-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Basic: 'bg-gray-100 text-gray-800',
  };
  return colors[proficiency];
};
