export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  tech: string[];
  github: string;
  live: string;
  featured?: boolean;
  tag?: string;
  image?: string;
  date?: string;
}

export interface CaseStudyChallenge {
  challenge: string;
  solution: string;
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  company: string;
  role: string;
  duration: string;
  status: string;
  techStack: string[];
  overview: string;
  problem: string;
  solution: string;
  process: string[];
  challenges: CaseStudyChallenge[];
  results: string[];
  learnings: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
}

export interface MetricStat {
  value: string;
  label: string;
}

export interface PortfolioData {
  developer: {
    name: string;
    monogram: string;
    role: string;
    focalNumber: string;
    focalNumberLabel: string;
    tagline: string;
    bio: string;
    location: string;
    experienceYears: string;
    status: string;
    statement: {
      beforeHighlight: string;
      highlight1: string;
      middleText: string;
      highlight2: string;
      afterText: string;
      paragraphs?: string[];
    };
    socials: {
      github: string;
      linkedin?: string;
      email: string;
    };
  };
  stats: MetricStat[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  caseStudies: CaseStudyItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  partnersAndTech: {
    category: string;
    items: { name: string; tag: string }[];
  }[];
}
