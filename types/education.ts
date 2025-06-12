export interface EducationItem {
  id: string;
  year: string;
  institution: string;
  degree: string;
  gpa?: string;
  details?: string[];
  side: 'left' | 'right';
}