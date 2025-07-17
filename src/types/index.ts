export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: string;
  level: number;
  icon?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  icon: string;
  year: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface Theme {
  isDark: boolean;
  toggle: () => void;
}