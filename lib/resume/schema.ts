// lib/resume/schema.ts

export interface ResumeBasics {
  fullName: string;
  email: string;
  phone?: string;
  location?: string;
  headline?: string;
  summary?: string;
}

export interface ResumeWork {
  id: string;
  company: string;
  position: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
}

export interface ResumeEducation {
  id: string;
  institution: string;
  degree?: string;
  fieldOfStudy?: string;
  startDate?: string;
  endDate?: string;
}

export interface ResumeSkill {
  id: string;
  name: string;
  level?: string;
}

export interface ResumeProject {
  id: string;
  name: string;
  description?: string;
  technologies?: string[];
}

export interface ResumeSchema {
  basics: ResumeBasics;
  work: ResumeWork[];
  education: ResumeEducation[];
  skills: ResumeSkill[];
  projects: ResumeProject[];
}
